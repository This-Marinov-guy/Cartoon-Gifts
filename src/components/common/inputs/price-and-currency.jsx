import { CURRENCIES } from '@utils/defines';
import React from 'react'
import {observer} from 'mobx-react-lite'
import { useStore } from 'src/stores/storeContext'
import { useHttpClient } from '@hooks/use-http-request';
import useTranslation from 'next-translate/useTranslation';

const PriceAndCurrency = (props) => {
    const { currencyStore } = useStore();
    const { currency } = currencyStore;

    const {loading} = useHttpClient();
    const { t } = useTranslation('components');

    return (
        <div className='price-currency-container'>
            <h5>{t('common.inputs.price-currency.total')}: {Math.ceil(props.price * currency.multiplier)} {currency.symbol}</h5>
            {!loading && <div className='price-currency-label'>
                <small>{t('common.inputs.price-currency.currency')}</small>
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
