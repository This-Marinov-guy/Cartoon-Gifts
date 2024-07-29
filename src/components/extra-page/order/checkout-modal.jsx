import React, { useState, useEffect, Fragment } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { Spinner } from '@chakra-ui/react'
import { useStore } from 'src/stores/storeContext'
import { useHttpClient } from '@hooks/use-http-request'
import PaymentElement from '@components/payment/PaymentElement'
import SkeletonOne from '@components/common/loading/SkeletonOne'
import { ACTIVE_DISCOUNT, PAYMENT_OPTIONS } from '@utils/defines'
import { useRouter } from 'next/router'

const CheckoutModal = (props) => {
    const { currencyStore, checkoutStore } = useStore();
    const { currency } = currencyStore;
    const { checkout } = checkoutStore;

    const router = useRouter();

    const { sendRequest, loading } = useHttpClient();
    const [portalLoading, setPortalLoading] = useState(false);

    const [clientSecret, setClientSecret] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [previewUrls, setPreviewUrls] = useState([]);

    const files = [...checkout.peopleImages, ...checkout.petImages]

    useEffect(() => {
        setImageLoading(true);
        const images = [], fileReaders = [];
        let isCancel = false;
        if (files.length) {
            files.forEach((file) => {
                const fileReader = new FileReader();
                fileReaders.push(fileReader);
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        images.push(result)
                    }
                    if (images.length === files.length && !isCancel) {
                        setPreviewUrls(images);
                    }
                }
                fileReader.readAsDataURL(file);
                setImageLoading(false);
            })
        };

        return () => {
            isCancel = true;
            fileReaders.forEach(fileReader => {
                if (fileReader.readyState === 1) {
                    fileReader.abort()
                }
            })
        }
    }, [checkout.peopleImages, checkout.petImages]);

    const handleClose = () => {
        props.onClose();
    }

    const paymentReset = () => {
        setClientSecret(null);
    }

    const submitOrder = async () => {   
        setPortalLoading(true);
        const formData = checkoutStore.setFormData(currency.value);
        
        console.log(checkoutStore.checkout.payment, PAYMENT_OPTIONS[1].value);

        if (checkoutStore.checkout.payment == PAYMENT_OPTIONS[1].value) {
            const response = await sendRequest('/api/order/create', 'POST', formData);

            if (response.status) {
                router.push('/order/success');
            }
        } else {
            const response = await sendRequest('/api/order/payment-intent', 'POST', formData);

            if (response && response.status) {
                setClientSecret(response.clientSecret)
            }

            setPortalLoading(false);
        }
    }

    const body = clientSecret ? <PaymentElement
        clientSecret={clientSecret}
        onClose={paymentReset}
        paymentProperties={{
            successUrl: `${window.location.origin}/order/success`,
            failUrl: `${window.location.origin}/order/fail`,
            email: checkout.email,
            amount: Math.ceil(checkout.price * (ACTIVE_DISCOUNT ?? 1)),
            currency: currencyStore.currency,
        }}
    /> : <Fragment>
        <h5 className='mb-20'>Your Details</h5>
        <p>Name: {checkout.name}</p>
        <p>Email: {checkout.email}</p>
        <h5 className='mb-20 mt-20'>Details of your order</h5>
        <p>Occasion: {checkout.occasion}</p>
        <p>Profession: {checkout.profession}</p>
        <p>Hobby: {checkout.hobby}</p>
        <p>Label: {checkout.label} </p>
        <p>Description: {checkout.description}</p>
        <p>Size: {checkout.size.property}</p>
        <p>Delivery: {checkout.delivery.property}</p>
        <p>Image Selection</p>
        {previewUrls.length > 0 && <div className='preview_box_small'>
            {imageLoading ? <Spinner color='red.500' /> : previewUrls.map((url, index) => (
                <img key={index} className='preview_small' src={url} alt="Preview" />
            ))
            }
        </div>}
        <hr />
    </Fragment>

    return (
        <Modal onClose={handleClose} isOpen={props.isOpen} isCentered closeOnOverlayClick={false} scrollBehavior='inside'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Finish your order</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {portalLoading ? <SkeletonOne /> : body}
                </ModalBody>
                {(!clientSecret) && <ModalFooter>
                    {ACTIVE_DISCOUNT !== 1 ?
                        <h5 style={{ width: '160px', position: 'absolute', left: '20px' }}>Total: <s>{Math.ceil(checkout.price * currency.multiplier)}</s> {Math.ceil((checkout.price * currency.multiplier) * ACTIVE_DISCOUNT)} {currency.symbol}</h5> :
                        <h5 style={{ width: '140px', position: 'absolute', left: '20px' }}>Total: {Math.ceil(checkout.price * currency.multiplier)} {currency.symbol}</h5>
                    }
                    <button disabled={loading} type="button" onClick={handleClose} className="bd-btn-link btn_dark" style={{ marginRight: '10px' }} >
                        Back
                    </button>
                    <button disabled={loading} type="submit" onClick={submitOrder} className="bd-btn-link">
                        {loading ? <Spinner /> : 'Pay'}
                    </button>
                </ModalFooter>}
            </ModalContent>
        </Modal>
    )
}

export default observer(CheckoutModal)
