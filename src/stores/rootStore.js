import CommonStore from './commonStore';
import UserStore from './userStore';
import CheckoutStore from './checkoutStore';
import CurrencyStore from './currencyStore';

export class RootStore {
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

let clientRootStore;

/**
 * Create a new store instance on the server (per request render),
 * and reuse a singleton on the client (per browser session).
 *
 * This avoids SSR ↔ client hydration mismatches caused by module-level singletons
 * holding time/localStorage-dependent state across server requests.
 */
export function initializeRootStore() {
    if (typeof window === 'undefined') {
        return new RootStore();
    }

    if (!clientRootStore) {
        clientRootStore = new RootStore();
    }

    return clientRootStore;
}