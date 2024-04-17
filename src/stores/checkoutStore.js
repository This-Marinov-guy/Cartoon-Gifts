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
        hasDescription: true,
        description: '',
        peopleImages: [],
        petImages: [],
        size: {
            property: 'A4',
            price: 0
        },
        delivery: {
            property: 'Normal',
            price: 5
        },
        price: 35,
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
        this.checkout.description = data.hasDescription ? data.description : 'We will handle the description for you!';
        this.checkout.peopleImages = data.peopleImages;
        this.checkout.petImages = data.petImages;
    }

    @action
    setField(dataObject, property, value) {
        this[dataObject] = { ...this[dataObject], [property]: value };
    }

    @action
    validate() {
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
    resetData() {
        this.checkout.name = ''
        this.checkout.email = ''
        this.checkout.occasion = '';
        this.checkout.profession = '';
        this.checkout.hobby = '';
        this.checkout.label = '';
        this.checkout.hasDescription = true;
        this.checkout.description = '';
        this.checkout.peopleImages = [];
        this.checkout.petImages = [];
        this.checkout.size = {
            property: 'A4',
            price: 0
        };
        this.checkout.delivery = {
            property: 'Normal',
            price: 5
        };
        this.checkout.price = 35;
        this.invalidFields = []
    }
}
