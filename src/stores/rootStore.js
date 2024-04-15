import UserStore from './userStore';
import CheckoutStore from './checkoutStore';

class RootStore {
    userStore;
    checkoutStore;

    constructor() {
        this.userStore = new UserStore(this);
        this.checkoutStore = new CheckoutStore(this);
    }
}

export const rootStore = new RootStore();