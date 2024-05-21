import { BASIC_PRICE, CURRENCIES, DELIVERY_ITEMS, SIZE_ITEMS } from "@utils/defines";
import { action, makeAutoObservable, observable } from "mobx"

export default class CheckoutStore {
    rootStore;

    @observable checkout = {
        name: '',
        email: '',
        occasion: '',
        profession: '',
        hobby: '',
        label: '',
        noDescription: false,
        description: '',
        peopleImages: [],
        petImages: [],
        size: SIZE_ITEMS[0],
        delivery: DELIVERY_ITEMS[0],
        price: BASIC_PRICE,
        shipping: {
            country: '',
            address: '',
            zip: '',
            phone: '',
        }
    };

    @observable invalidFields = []

    constructor(root) {
        makeAutoObservable(this)
        this.rootStore = root
    }

    @action
    setData(data) {
        this.checkout.name = data.name;
        this.checkout.email = data.email;
        this.checkout.occasion = data.occasion;
        this.checkout.profession = data.profession;
        this.checkout.hobby = data.hobby;
        this.checkout.label = data.label;
        this.checkout.description = (data.noDescription && data.description) ? data.description : 'We will handle the description for you!';
        this.checkout.peopleImages = data.peopleImages;
        this.checkout.petImages = data.petImages;
        this.checkout.shipping = {
            country: data.country,
            address: data.address,
            zip: data.zip,
            phone: data.phone,
        };
    }

    @action
    setField(dataObject, property, value) {
        this[dataObject] = { ...this[dataObject], [property]: value };
    }

    @action
    setInvalidField(value) {
        this.invalidFields = [...this.invalidFields, value]
    }

    @action
    validate() {
        this.invalidFields = [];

        if (!this.checkout.delivery.property) {
            this.invalidFields = [...this.invalidFields, 'delivery']
        }

        if (!this.checkout.size.property) {
            this.invalidFields = [...this.invalidFields, 'size']
        }

        if (this.checkout.peopleImages.length < 1) {
            this.invalidFields = [...this.invalidFields, 'peopleImages']
        }

        if (this.invalidFields.length > 0) {
            return false
        } else {
            return true
        }
    }

    @action
    setFormData(selectedCurrency) {
        const formData = new FormData();
        formData.append('method', 'order');
        [...this.checkout.peopleImages, ...this.checkout.petImages].forEach((image) => {
            formData.append("images", image);
        });

        formData.append("name", this.checkout.name);
        formData.append("email", this.checkout.email);
        formData.append("occasion", this.checkout.occasion);
        formData.append("profession", this.checkout.profession);
        formData.append("hobby", this.checkout.hobby);
        formData.append("label", this.checkout.label);
        formData.append("hasPet", this.checkout.petImages.length > 0);
        formData.append("description", this.checkout.description || 'We will handle the description for you!');
        formData.append("size", this.checkout.size.property);
        formData.append("delivery", this.checkout.delivery.property);

        const currency = CURRENCIES.find(c => c.value === selectedCurrency) || CURRENCIES[0];

        console.log(currency);
        formData.append("price", this.checkout.price * currency.multiplier);
        formData.append("currency", currency.value);

        if (this.checkout.delivery !== DELIVERY_ITEMS[0]) {
            formData.append("country", this.checkout.shipping.country);
            formData.append("address", this.checkout.shipping.address);
            formData.append("zip", this.checkout.shipping.zip);
            formData.append("phone", this.checkout.shipping.phone);
        }

        return formData;
    }

    @action
    resetData() {
        this.checkout.name = ''
        this.checkout.email = ''
        this.checkout.occasion = '';
        this.checkout.profession = '';
        this.checkout.hobby = '';
        this.checkout.label = '';
        this.checkout.noDescription = false;
        this.checkout.description = '';
        this.checkout.peopleImages = [];
        this.checkout.petImages = [];
        this.checkout.size = SIZE_ITEMS[0];
        this.checkout.delivery = DELIVERY_ITEMS[0];
        this.checkout.price = BASIC_PRICE;
        this.shipping = {
            country: '',
            address: '',
            zip: '',
            phone: ''
        }
        
        this.invalidFields = []
    }
}
