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
import { action, makeAutoObservable, observable } from "mobx";
import moment from "moment";

export default class CheckoutStore {
  rootStore;

  @observable checkout = {
    name: "",
    email: "",
    occasion: "",
    profession: "",
    hobby: "",
    label: "",
    noDescription: false,
    description: "",
    peopleImages: [],
    petImages: [],
    size: SIZE_ITEMS[0],
    delivery: DELIVERY_ITEMS[0],
    canvas: MATERIAL_OPTIONS[0],
    date: moment().add(FIRST_POSSIBLE_DATE, "days").format("YYYY-MM-DD"),
    price: BASIC_PRICE,
    discountedPrice: null,
    payment: PAYMENT_OPTIONS[0].value,
    shipping: {
      country: "",
      city: "",
      address: "",
      zip: "",
      phone: "",
    },
    promoCode: {},
    discountApplied: false,
  };

  @observable isLoading = false;

  @observable invalidFields = [];

  constructor(root) {
    makeAutoObservable(this);
    this.rootStore = root;
  }

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
  }

  @action
  setIsLoading(value) {
    this.isLoading = value;
  }

  @action
  setField(dataObject, property, value) {
    this[dataObject] = { ...this[dataObject], [property]: value };
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

    if (this.checkout.peopleImages.length < 1) {
      this.invalidFields = [...this.invalidFields, "peopleImages"];
    }

    if (this.invalidFields.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  @action
  setFormData(selectedCurrency) {
    const data = {};

    data.method = "order";
    data.name = this.checkout.name;
    data.email = this.checkout.email;
    data.occasion = this.checkout.occasion;
    data.profession = this.checkout.profession;
    data.hobby = this.checkout.hobby;
    data.label = this.checkout.label;
    data.hasPet = this.checkout.petImages.length > 0;
    data.description =
      this.checkout.description || "We will handle the description for you!";
    data.size = this.checkout.size.property;
    data.canvas = this.checkout.canvas.property;
    data.date = moment(this.checkout.date).format("DD-MM-YYYY");
    
    data.delivery = this.checkout.delivery.property;
    data.payment = this.checkout.payment;
    
    if (this.checkout.promoCode) {
        data.promoCode = this.checkout.promoCode;
    }
    
    const currency =
    CURRENCIES.find((c) => c.value === selectedCurrency) || CURRENCIES[0];
    
    data.price = Math.ceil(this.checkout.discountedPrice * currency.multiplier);
    data.currency = currency.value;
    
    if (this.checkout.delivery !== DELIVERY_ITEMS[0]) {
        data.country = this.checkout.shipping.country;
        data.city = this.checkout.shipping.city;
        data.address = this.checkout.shipping.address;
        data.zip = this.checkout.shipping.zip;
        data.phone = this.checkout.shipping.phone;
    }

    if (data.phone[0] === "+") {
      data.phone = data.phone.slice(1);
    }

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
    this.checkout.name = "";
    this.checkout.email = "";
    this.checkout.occasion = "";
    this.checkout.profession = "";
    this.checkout.hobby = "";
    this.checkout.label = "";
    this.checkout.noDescription = false;
    this.checkout.description = "";
    this.checkout.payment = PAYMENT_OPTIONS[0];
    this.checkout.peopleImages = [];
    this.checkout.petImages = [];
    this.checkout.size = SIZE_ITEMS[0];
    this.checkout.canvas = MATERIAL_OPTIONS[0];
    this.checkout.date = moment().add(FIRST_POSSIBLE_DATE, "days").format("YYYY-MM-DD");
    this.checkout.delivery = DELIVERY_ITEMS[0];
    this.checkout.price = BASIC_PRICE;
    this.checkout.originalPrice = null;
    this.shipping = {
      country: "",
      city: "",
      address: "",
      zip: "",
      phone: "",
    };
    this.checkout.promoCode = {};

    this.invalidFields = [];
    this.discountApplied = false;
  }

  get imagesFormData() {
    const formData = new FormData();
    formData.append("method", "order");
    [...this.checkout.peopleImages, ...this.checkout.petImages].forEach(
      (image) => {
        formData.append("images", image);
      }
    );

    return formData;
  }
}
