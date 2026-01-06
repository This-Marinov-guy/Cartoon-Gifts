import { CURRENCIES } from "@utils/defines";
import { action, makeAutoObservable, observable } from "mobx"

export default class CurrencyStore {
    rootStore;

    @observable currency = CURRENCIES[0];

    constructor(root) {
        makeAutoObservable(this)
        this.rootStore = root
    }

    @action setCurrencyByValue(value) {
        const selectedCurrency = CURRENCIES.find((c) => c.value === value);

        if (selectedCurrency.value === 'BGN' || !selectedCurrency) {
            selectedCurrency = CURRENCIES[0];
        }

        this.currency = selectedCurrency;
        localStorage.setItem('currency', JSON.stringify(selectedCurrency));
    }

    @action setCurrency(currency) {
        this.currency = currency;
        localStorage.setItem('currency', JSON.stringify(currency));
    }

}
