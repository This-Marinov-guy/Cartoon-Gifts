import { CURRENCIES } from "@utils/defines";
import { action, makeAutoObservable, observable } from "mobx"

export default class CurrencyStore {
    rootStore;

    @observable currency = {
        value: 'EUR',
        label: 'euro',
        symbol: '€',
        multiplier: 1,
    };

    constructor(root) {
        makeAutoObservable(this)
        this.rootStore = root
    }

    @action setCurrencyByValue(value) {
        const selectedCurrency = CURRENCIES.find((c) => c.value === value)

        this.currency = selectedCurrency
    }

    @action setCurrency(currency) {
        this.currency = currency
    }

}
