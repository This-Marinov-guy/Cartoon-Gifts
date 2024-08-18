import React, { useEffect, useState } from 'react'
import { Badge } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useHttpClient } from '@hooks/use-http-request';
import { useStore } from 'src/stores/storeContext';
import { useToast } from '@chakra-ui/react';
import { debounce } from '@utils/helpers';

const PromoCode = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { t } = useTranslation('components');

    const { checkoutStore } = useStore();

    const { sendRequest } = useHttpClient();

    const toast = useToast();

    let debounceTimer;

    const handleInput = (e) => {
        if (checkoutStore.checkout.promoCode.discount) {
            return;
        }

        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(async () => {
            setError(false);
            setLoading(true);
            try {
                const responseData = await sendRequest('/api/common/validate-promo-code', "POST", { promoCode: e.target.value });
                if (responseData.status && responseData.promoCode) {
                    checkoutStore.setField('checkout', 'promoCode', responseData.promoCode);
                    toast({
                        title: t('extra-page.order.promo.validCode'),
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    })
                } else {
                    setError(true);
                    toast({
                        title: t('extra-page.order.promo.invalidCode'),
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    })
                }
            } catch (err) {
            } finally {
                setLoading(false);
            }
        }, 800);
    };

    const clearDebounceTimer = () => {
        clearTimeout(debounceTimer);
    };

    useEffect(() => {

        return () => {
            clearDebounceTimer();
        };
    }, []); 

    const removePromoCode = () => {
        checkoutStore.setField('checkout', 'promoCode', {});
    }

    return (
        <div className="col col-md-6">
            <h4>{t('extra-page.order.promo.promoCode')} {loading ? <Spinner /> : <i className="fa-solid fa-percent"></i>}</h4>
            <div className="form-group m-0">
                <input
                    type='text'
                    name='promoCode'
                    onChange={handleInput}
                    placeholder={t('extra-page.order.promo.enterPromoCode')}
                    className={`form-control ${error && 'error-border'}`}
                />
            </div>
            {checkoutStore.checkout.promoCode.value && <Badge onClick={removePromoCode} colorScheme='purple' style={{ cursor: 'pointer' }}>{checkoutStore.checkout.promoCode.value} x</Badge>}
        </div>

    )
}

export default PromoCode