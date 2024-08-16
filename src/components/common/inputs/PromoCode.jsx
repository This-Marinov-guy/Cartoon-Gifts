import React, {useState} from 'react'
import useTranslation from 'next-translate/useTranslation';
import { useHttpClient } from '@hooks/use-http-request';
import { useStore } from 'src/stores/storeContext';
import { useToast } from '@chakra-ui/react';

const PromoCode = () => {
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation('components');

    const { checkoutStore } = useStore();

    const { sendRequest } = useHttpClient();

    const toast = useToast();

    const handleInput = async (e) => {
        setLoading(true);
        try {
            const responseData = await sendRequest('/api/common/validate-promo-code', "POST" ,{ promoCode: e.target.value });
            if (responseData.status && responseData.promoCode) {
                checkoutStore.setField('checkout', 'promoCode', responseData.promoCode);
                toast({
                    title: t('extra-page.order.promo.validCode'),
                    status: 'success',
                    duration: 8000,
                    isClosable: true,
                })
            } else {
                toast({
                    title: t('extra-page.order.promo.invalidCode'),
                    status: 'error',
                    duration: 8000,
                    isClosable: true,
                })
            }
        } catch (err) {

        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="col col-md-6">
            <h4>{t('extra-page.order.promo.promoCode')} <i className="fa-solid fa-percent"></i></h4>
            <div className="form-group m-0">
                <input
                    type='text'
                    name='promoCode'
                    onBlur={handleInput}
                    placeholder={t('extra-page.order.promo.enterPromoCode')}
                    className={`form-control ${(false) && 'error-border'}`}
                />
            </div>
        </div>

    )
}

export default PromoCode