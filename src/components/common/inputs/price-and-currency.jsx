import { CURRENCIES } from '@utils/defines';
import React from 'react'
import {observer} from 'mobx-react-lite'
import { useStore } from 'src/stores/storeContext'

const PriceAndCurrency = (props) => {
    const { currencyStore } = useStore();
    const { currency } = currencyStore

    return (
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', marginBottom: '10px' }}>
            <h5 style={{width: '130px'}}>Total: {props.price * currency.multiplier} {currency.symbol}</h5>
            {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
                <small>Currency</small>
                <select className='currency-input' value={currency.value} onChange={(event) => currencyStore.setCurrencyByValue(event.target.value)}>
                    {CURRENCIES.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div> */}
        </div>
    )
}

export default observer(PriceAndCurrency)