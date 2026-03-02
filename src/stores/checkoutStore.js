import { v4 as uuidv4 } from 'uuid';
import {
  ACTIVE_DISCOUNT,
  BASIC_PRICE,
  CURRENCIES,
  DELIVERY_ITEMS,
  FIRST_POSSIBLE_DATE,
  MATERIAL_OPTIONS,
  PAYMENT_OPTIONS,
  SIZE_ITEMS,
} from "@utils/defines";
import { action, makeAutoObservable, observable, runInAction } from "mobx";
import moment from "moment";

const LS_KEY = 'cg_checkout';

const defaultCheckout = () => ({
  name: "",
  email: "",
  occasion: "",
  profession: "",
  hobby: "",
  label: "",
  noDescription: false,
  description: "",
  peopleImages: [],   // File objects (runtime only, not persisted)
  petImages: [],      // File objects (runtime only, not persisted)
  size: SIZE_ITEMS[0],
  delivery: DELIVERY_ITEMS[0],
  canvas: MATERIAL_OPTIONS[0],
  date: moment().add(FIRST_POSSIBLE_DATE, "days").format("YYYY-MM-DD"),
  price: BASIC_PRICE,
  discountedPrice: null,
  payment: PAYMENT_OPTIONS[0].value,
  shipping: { country: "", city: "", address: "", zip: "", phone: "" },
  promoCode: {},
  discountApplied: false,
});

export default class CheckoutStore {
  rootStore;

  // ─── Upload state ────────────────────────────────────────────────────────
  @observable orderNumber = null;
  @observable folderId = null;
  @observable pendingUploads = 0;

  // True only when we restored a draft from localStorage during hydrate()
  @observable restoredFromLocalStorage = false;

  // Separate URL arrays so each ImageInput knows its own upload state
  @observable uploadedPeopleImageUrls = [];
  @observable uploadedPetImageUrls = [];

  // base64 data URLs for localStorage persistence (and checkout preview)
  @observable peopleImageDataUrls = [];
  @observable petImageDataUrls = [];

  // Monotonically-increasing file index used for Drive file naming
  @observable nextFileIndex = 0;

  // ─── Form state ──────────────────────────────────────────────────────────
  @observable checkout = defaultCheckout();
  @observable isLoading = false;
  @observable invalidFields = [];

  // Non-observable: single-flight promise for folder creation
  _folderCreationPromise = null;

  constructor(root) {
    makeAutoObservable(this);
    this.rootStore = root;
    // Do NOT load localStorage here — that causes SSR/hydration mismatches.
    // Call hydrate() from a client-side useEffect instead.
  }

  // Called once from StoreProvider after mount so the first render matches SSR.
  @action
  hydrate() {
    if (typeof window === 'undefined') return;
    this._loadFromLocalStorage();
  }

  // ─── Computed ─────────────────────────────────────────────────────────────
  get isUploadingImages() {
    return this.pendingUploads > 0;
  }

  get allImagesUploaded() {
    const totalData = this.peopleImageDataUrls.length + this.petImageDataUrls.length;
    if (totalData === 0) return true; // nothing uploaded yet — validation will catch missing images
    return (
      this.pendingUploads === 0 &&
      this.uploadedPeopleImageUrls.length >= this.peopleImageDataUrls.length &&
      this.uploadedPetImageUrls.length >= this.petImageDataUrls.length
    );
  }

  get allUploadedUrls() {
    return [...this.uploadedPeopleImageUrls, ...this.uploadedPetImageUrls];
  }

  // ─── Upload management ───────────────────────────────────────────────────
  @action
  initOrderNumber() {
    if (!this.orderNumber) {
      this.orderNumber = uuidv4();
      this._saveToLocalStorage();
    }
    return this.orderNumber;
  }

  @action
  setFolderId(id) {
    this.folderId = id;
    this._saveToLocalStorage();
  }

  @action
  incrementPendingUploads(count = 1) {
    this.pendingUploads += count;
  }

  // Called on successful upload
  @action
  addUploadedUrl(url, type) {
    if (type === 'people') {
      this.uploadedPeopleImageUrls = [...this.uploadedPeopleImageUrls, url];
    } else {
      this.uploadedPetImageUrls = [...this.uploadedPetImageUrls, url];
    }
    this.pendingUploads = Math.max(0, this.pendingUploads - 1);
    this._saveToLocalStorage();
  }

  // Called when an upload fails (still need to drain the counter)
  @action
  failUpload() {
    this.pendingUploads = Math.max(0, this.pendingUploads - 1);
  }

  // Returns the next index for file naming in Drive (atomic, safe for parallel calls)
  @action
  getNextFileIndex() {
    const idx = this.nextFileIndex;
    this.nextFileIndex += 1;
    this._saveToLocalStorage();
    return idx;
  }

  @action
  setPeopleImageDataUrls(dataUrls) {
    this.peopleImageDataUrls = dataUrls;
    this._saveToLocalStorage();
  }

  @action
  setPetImageDataUrls(dataUrls) {
    this.petImageDataUrls = dataUrls;
    this._saveToLocalStorage();
  }

  // Remove a specific Drive URL (called when user removes an already-uploaded image)
  @action
  removeUploadedUrl(url, type) {
    if (type === 'people') {
      this.uploadedPeopleImageUrls = this.uploadedPeopleImageUrls.filter((u) => u !== url);
    } else {
      this.uploadedPetImageUrls = this.uploadedPetImageUrls.filter((u) => u !== url);
    }
    this._saveToLocalStorage();
  }

  @action
  removePeopleImageDataUrl(index) {
    this.peopleImageDataUrls = this.peopleImageDataUrls.filter((_, i) => i !== index);
    this._saveToLocalStorage();
  }

  @action
  removePetImageDataUrl(index) {
    this.petImageDataUrls = this.petImageDataUrls.filter((_, i) => i !== index);
    this._saveToLocalStorage();
  }

  // Clear per-type uploaded URLs (used before a re-upload after page refresh)
  @action
  clearPeopleUploadedUrls() {
    this.uploadedPeopleImageUrls = [];
    this._saveToLocalStorage();
  }

  @action
  clearPetUploadedUrls() {
    this.uploadedPetImageUrls = [];
    this._saveToLocalStorage();
  }

  /**
   * Ensure the Drive folder exists exactly once, even when called concurrently.
   * Returns a Promise<folderId>.
   */
  ensureFolder() {
    if (this.folderId) return Promise.resolve(this.folderId);

    if (!this._folderCreationPromise) {
      this._folderCreationPromise = fetch('/api/common/create-order-folder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderNumber: this.orderNumber }),
      })
        .then((r) => r.json())
        .then((data) => {
          if (!data.status) throw new Error('Folder creation failed');
          runInAction(() => {
            this.folderId = data.folderId;
            this._saveToLocalStorage();
          });
          return data.folderId;
        })
        .catch((err) => {
          this._folderCreationPromise = null; // allow retry
          throw err;
        });
    }

    return this._folderCreationPromise;
  }

  // ─── Form data ───────────────────────────────────────────────────────────
  @action
  setData(data) {
    this.checkout.name = data.name;
    this.checkout.email = data.email;
    this.checkout.occasion = data.occasion;
    this.checkout.profession = data.profession;
    this.checkout.hobby = data.hobby;
    this.checkout.payment = data.payment;
    this.checkout.label = data.label;
    this.checkout.description =
      data.noDescription || !data.description
        ? "We will handle the description for you!"
        : data.description;
    this.checkout.peopleImages = data.peopleImages;
    this.checkout.petImages = data.petImages;
    this.checkout.date = data.date;
    this.checkout.shipping = {
      country: data.country,
      city: data.city,
      address: data.address,
      zip: data.zip,
      phone: data.phone,
    };
    this._saveToLocalStorage();
  }

  // Called by FormAutoSave on every Formik value change (debounced)
  @action
  saveFormValues(values) {
    const c = this.checkout;
    if (values.name !== undefined)         c.name        = values.name;
    if (values.email !== undefined)        c.email       = values.email;
    if (values.occasion !== undefined)     c.occasion    = values.occasion;
    if (values.profession !== undefined)   c.profession  = values.profession;
    if (values.hobby !== undefined)        c.hobby       = values.hobby;
    if (values.label !== undefined)        c.label       = values.label;
    if (values.noDescription !== undefined) c.noDescription = values.noDescription;
    if (values.description !== undefined)  c.description = values.description;
    if (values.payment !== undefined)      c.payment     = values.payment;
    if (values.date !== undefined)         c.date        = values.date;
    c.shipping = {
      country: values.country  ?? c.shipping.country,
      city:    values.city     ?? c.shipping.city,
      address: values.address  ?? c.shipping.address,
      zip:     values.zip      ?? c.shipping.zip,
      phone:   values.phone    ?? c.shipping.phone,
    };
    this._saveToLocalStorage();
  }

  @action
  setIsLoading(value) {
    this.isLoading = value;
  }

  @action
  setField(dataObject, property, value) {
    this[dataObject] = { ...this[dataObject], [property]: value };
    this._saveToLocalStorage();
  }

  @action
  setInvalidField(value) {
    this.invalidFields = [...this.invalidFields, value];
  }

  @action
  validate() {
    this.invalidFields = [];

    if (!this.checkout.delivery.property) {
      this.invalidFields = [...this.invalidFields, "delivery"];
    }
    if (!this.checkout.size.property) {
      this.invalidFields = [...this.invalidFields, "size"];
    }
    if (!this.checkout.canvas.property) {
      this.invalidFields = [...this.invalidFields, "canvas"];
    }
    // Validate that at least 1 people image has been successfully uploaded
    if (this.uploadedPeopleImageUrls.length < 1) {
      this.invalidFields = [...this.invalidFields, "peopleImages"];
    }

    return this.invalidFields.length === 0;
  }

  @action
  setFormData(selectedCurrency) {
    const data = {};

    data.method   = "order";
    data.name     = this.checkout.name;
    data.email    = this.checkout.email;
    data.occasion = this.checkout.occasion;
    data.profession = this.checkout.profession;
    data.hobby    = this.checkout.hobby;
    data.label    = this.checkout.label;
    data.hasPet   = this.uploadedPetImageUrls.length > 0;
    data.description = this.checkout.description || "We will handle the description for you!";
    data.size     = this.checkout.size.property;
    data.canvas   = this.checkout.canvas.property;
    data.date     = moment(this.checkout.date).format("DD-MM-YYYY");
    data.delivery = this.checkout.delivery.property;
    data.payment  = this.checkout.payment;

    if (this.checkout.promoCode) data.promoCode = this.checkout.promoCode;

    const currency =
      CURRENCIES.find((c) => c.value === selectedCurrency) || CURRENCIES[0];
    data.price    = Math.ceil(this.checkout.discountedPrice * currency.multiplier);
    data.currency = currency.value;

    if (this.checkout.delivery !== DELIVERY_ITEMS[0]) {
      data.country = this.checkout.shipping.country;
      data.city    = this.checkout.shipping.city;
      data.address = this.checkout.shipping.address;
      data.zip     = this.checkout.shipping.zip;
      data.phone   = this.checkout.shipping.phone;
    }

    if (data.phone && data.phone[0] === "+") data.phone = data.phone.slice(1);

    // Images are pre-uploaded — just pass the Drive URLs
    data.orderNumber = this.orderNumber;
    data.images      = this.allUploadedUrls;

    return data;
  }

  @action
  calculateDiscount() {
    const startPrice = this.checkout.price;
    this.discountedPrice = startPrice;

    if (!isNaN(ACTIVE_DISCOUNT)) {
      this.checkout.discountedPrice = Math.ceil(
        this.checkout.price - (startPrice * ACTIVE_DISCOUNT) / 100
      );
    }

    if (this.checkout.promoCode && !isNaN(this.checkout.promoCode.discount)) {
      this.checkout.discountedPrice = Math.ceil(
        this.checkout.price -
          (startPrice * this.checkout.promoCode.discount) / 100
      );
    }
  }

  @action
  resetData() {
    this.checkout              = defaultCheckout();
    this.orderNumber           = null;
    this.folderId              = null;
    this.pendingUploads        = 0;
    this.uploadedPeopleImageUrls = [];
    this.uploadedPetImageUrls  = [];
    this.peopleImageDataUrls   = [];
    this.petImageDataUrls      = [];
    this.nextFileIndex         = 0;
    this.invalidFields         = [];
    this._folderCreationPromise = null;
    this.restoredFromLocalStorage = false;

    if (typeof window !== 'undefined') {
      localStorage.removeItem(LS_KEY);
    }
  }

  // ─── LocalStorage ─────────────────────────────────────────────────────────
  _saveToLocalStorage() {
    if (typeof window === 'undefined') return;

    const c = this.checkout;
    const payload = {
      orderNumber: this.orderNumber,
      folderId:    this.folderId,
      nextFileIndex: this.nextFileIndex,
      uploadedPeopleImageUrls: this.uploadedPeopleImageUrls,
      uploadedPetImageUrls:    this.uploadedPetImageUrls,
      checkout: {
        name: c.name, email: c.email, occasion: c.occasion,
        profession: c.profession, hobby: c.hobby, label: c.label,
        noDescription: c.noDescription, description: c.description,
        size: c.size, delivery: c.delivery, canvas: c.canvas,
        date: c.date, price: c.price, payment: c.payment,
        shipping: c.shipping, promoCode: c.promoCode,
      },
    };

    // Try with image data URLs first; fall back to text-only if storage is full
    const withImages = {
      ...payload,
      peopleImageDataUrls: this.peopleImageDataUrls,
      petImageDataUrls:    this.petImageDataUrls,
    };

    try {
      localStorage.setItem(LS_KEY, JSON.stringify(withImages));
    } catch {
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(payload));
      } catch {
        // silently ignore if even text fields can't fit
      }
    }
  }

  @action
  _loadFromLocalStorage() {

    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) {
        this.restoredFromLocalStorage = false;
        return;
      }

      const s = JSON.parse(raw);

      const hasMeaningfulDraft =
        (Array.isArray(s.peopleImageDataUrls) && s.peopleImageDataUrls.length > 0) ||
        (Array.isArray(s.petImageDataUrls) && s.petImageDataUrls.length > 0) ||
        (Array.isArray(s.uploadedPeopleImageUrls) && s.uploadedPeopleImageUrls.length > 0) ||
        (Array.isArray(s.uploadedPetImageUrls) && s.uploadedPetImageUrls.length > 0) ||
        !!(s.checkout && (
          s.checkout.name ||
          s.checkout.email ||
          s.checkout.occasion ||
          s.checkout.profession ||
          s.checkout.hobby ||
          s.checkout.label ||
          s.checkout.description ||
          (s.checkout.shipping && (
            s.checkout.shipping.country ||
            s.checkout.shipping.city ||
            s.checkout.shipping.address ||
            s.checkout.shipping.zip ||
            s.checkout.shipping.phone
          )) ||
          (s.checkout.promoCode && Object.keys(s.checkout.promoCode).length > 0)
        ));

      this.restoredFromLocalStorage = hasMeaningfulDraft;
      if (!hasMeaningfulDraft) {
        localStorage.removeItem(LS_KEY);
      }

      if (s.orderNumber)    this.orderNumber    = s.orderNumber;
      if (s.folderId)       this.folderId       = s.folderId;
      if (s.nextFileIndex)  this.nextFileIndex  = s.nextFileIndex;

      if (Array.isArray(s.uploadedPeopleImageUrls))
        this.uploadedPeopleImageUrls = s.uploadedPeopleImageUrls;
      if (Array.isArray(s.uploadedPetImageUrls))
        this.uploadedPetImageUrls = s.uploadedPetImageUrls;
      if (Array.isArray(s.peopleImageDataUrls))
        this.peopleImageDataUrls = s.peopleImageDataUrls;
      if (Array.isArray(s.petImageDataUrls))
        this.petImageDataUrls = s.petImageDataUrls;

      if (s.checkout) {
        const c = s.checkout;
        if (c.name)          this.checkout.name          = c.name;
        if (c.email)         this.checkout.email         = c.email;
        if (c.occasion)      this.checkout.occasion      = c.occasion;
        if (c.profession)    this.checkout.profession    = c.profession;
        if (c.hobby)         this.checkout.hobby         = c.hobby;
        if (c.label)         this.checkout.label         = c.label;
        if (c.noDescription !== undefined) this.checkout.noDescription = c.noDescription;
        if (c.description)   this.checkout.description   = c.description;
        if (c.size)          this.checkout.size          = c.size;
        if (c.delivery)      this.checkout.delivery      = c.delivery;
        if (c.canvas)        this.checkout.canvas        = c.canvas;
        if (c.date)          this.checkout.date          = c.date;
        if (c.price)         this.checkout.price         = c.price;
        if (c.payment)       this.checkout.payment       = c.payment;
        if (c.shipping)      this.checkout.shipping      = c.shipping;
        if (c.promoCode)     this.checkout.promoCode     = c.promoCode;
      }
    } catch (e) {
      this.restoredFromLocalStorage = false;
      console.warn('Failed to restore checkout from localStorage', e);
    }
  }
}
