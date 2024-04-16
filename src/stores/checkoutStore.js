import { action, makeAutoObservable, observable, runInAction } from "mobx"

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
        this.checkout.description = data.description;
        this.checkout.peopleImages = data.peopleImages;
        this.checkout.petImages = data.petImages;
        this.checkout.size = data.size;
        this.checkout.delivery = data.delivery;
        this.checkout.price = data.price;
    }

    @action
    validate(data) {
        // if (!checkout.delivery.property) {
            
        //     setInvalidFields(prevState => {
        //         return [
        //             ...prevState, 'delivery'
        //         ]
        //     })
        // }

        // if (!checkout.size.property) {
        //     setInvalidFields(prevState => {
        //         return [
        //             ...prevState, 'size'
        //         ]
        //     })
        // }

        // if (checkout.files.length < 1) {
        //     setInvalidFields(prevState => {
        //         return [
        //             ...prevState, 'peopleImages'
        //         ]
        //     })
        // }

        // if (invalidFields.length > 0) {
        //     return
        // }
    }
}