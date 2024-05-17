import CommonStore from './commonStore';
import UserStore from './userStore';
import CheckoutStore from './checkoutStore';
import CurrencyStore from './currencyStore';

class RootStore {
    commonStore;
    userStore;
    checkoutStore;
    currencyStore;

    constructor() {
        this.commonStore = new CommonStore(this);
        this.userStore = new UserStore(this);
        this.checkoutStore = new CheckoutStore(this);
        this.currencyStore = new CurrencyStore(this);
    }
}

export const rootStore = new RootStore();