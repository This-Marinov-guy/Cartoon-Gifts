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
import { Spinner } from '@chakra-ui/react'
import { useStore } from 'src/stores/storeContext'
import { useHttpClient } from '@hooks/use-http-request'
import SuccessComp from '@components/common/success/SuccessComp'

const CheckoutModal = (props) => {
    const { checkoutStore } = useStore();
    const { checkout } = checkoutStore;

    const { sendRequest, loading } = useHttpClient();

    const [orderNumber, setOrderNumber] = useState(null);
    const [success, setSuccess] = useState(false);
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

    const submitOrder = async () => {
        const formData = checkoutStore.setFormData();
        const response = await sendRequest('/api/order/create', 'POST', formData);

        if (response && response.status) {
            setOrderNumber(response.orderNumber);
            setSuccess(true);
            checkoutStore.resetData();
        }
    }

    return (
        <Modal onClose={handleClose} isOpen={props.isOpen} isCentered closeOnOverlayClick={false} scrollBehavior='inside'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Finish your order</ModalHeader>
                <ModalCloseButton />
                {success ? <SuccessComp title={`Received Order`} subTitle={`${orderNumber}`} description='Thank you for the order - we will email you the details right away. If you have any problems or did not receive an email, do not hesitate to contact us!' /> : <Fragment>
                    <ModalBody>
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
                    </ModalBody>
                    <ModalFooter>
                        <h5 className='mr-20'>Total: {checkout.price} £</h5>
                        <button disabled={loading} type="button" onClick={handleClose} className="bd-btn-link btn_dark" style={{ marginRight: '10px' }} >
                            Cancel
                        </button>
                        <button disabled={loading} type="submit" onClick={submitOrder} className="bd-btn-link">
                            {loading ? <Spinner /> : 'Sent'}
                        </button>
                    </ModalFooter>
                </Fragment>}
            </ModalContent>
        </Modal>
    )
}

export default CheckoutModal