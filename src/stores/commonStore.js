import { action, makeAutoObservable, observable } from "mobx"

export default class CommonStore {
    rootStore;

    @observable loading = false;

    @observable error = '';

    constructor(root) {
        makeAutoObservable(this)
        this.rootStore = root
    }

    @action setLoading(loading) {
        this.loading = loading
    }

    @action setError(error) {
        this.error = error
    }
}
