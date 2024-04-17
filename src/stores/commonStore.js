import { action, makeAutoObservable, observable } from "mobx"

export default class CheckoutStore {
    rootStore;

    @observable loading = false;

    @observable error = '';

    @action setLoading(loading) {
        this.loading = loading
    }

    @action setError(error) {
        this.error = error
    }

    constructor(root) {
        makeAutoObservable(this)
        this.rootStore = root
    }
}
