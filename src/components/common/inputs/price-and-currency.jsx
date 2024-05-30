import { CURRENCIES } from '@utils/defines';
import React from 'react'
import {observer} from 'mobx-react-lite'
import { useStore } from 'src/stores/storeContext'
import { useHttpClient } from '@hooks/use-http-request';

const PriceAndCurrency = (props) => {
    const { currencyStore } = useStore();
    const { currency } = currencyStore;

    const {loading} = useHttpClient();

    return (
        <div className='price-currency-container'>
            <h5>Total: {Math.ceil(props.price * currency.multiplier)} {currency.symbol}</h5>
            {!loading && <div className='price-currency-label'>
                <small>Currency</small>
                <select className='currency-input' value={currency.value} onChange={(event) => currencyStore.setCurrencyByValue(event.target.value)}>
                    {CURRENCIES.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>}
        </div>
    )
}

export default observer(PriceAndCurrency)
