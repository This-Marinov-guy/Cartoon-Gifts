import CommonStore from './commonStore';
import UserStore from './userStore';
import CheckoutStore from './checkoutStore';

class RootStore {
    commonStore;
    userStore;
    checkoutStore;

    constructor() {
        this.commonStore = new CommonStore(this);
        this.userStore = new UserStore(this);
        this.checkoutStore = new CheckoutStore(this);
    }
}

export const rootStore = new RootStore();