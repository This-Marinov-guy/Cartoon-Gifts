import React, { Fragment, useState, useEffect } from 'react'
import ImageInput from '@components/common/inputs/image'
import RadioCard from '@components/common/inputs/radio-card'
import RadioPrice from '@components/common/inputs/radio-price'
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { SIZE_ITEMS, DELIVERY_ITEMS, PET_OPTIONS, PERSON_IMAGE_PRICE, PET_IMAGE_PRICE } from '@utils/defines';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/stores/storeContext';
import CheckoutModal from './checkout-modal';
import { useToast } from '@chakra-ui/react';
import { askBeforeRedirect } from '@utils/globals';

const OrderForm = () => {
    const { checkoutStore } = useStore();
    const { checkout, invalidFields } = checkoutStore;
    const toast = useToast();

    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

    const [files, setFiles] = useState([]);
    const [petFiles, setPetFiles] = useState([]);
    const [hasPet, setHasPet] = useState({
        property: 'No',
        price: 0
    });

    const handlePriceChange = (item, state) => {
        if (checkout[state].property === item.property) {
            checkoutStore.setField('checkout', state, {
                property: '',
                price: 0
            });
            checkoutStore.setField('checkout', 'price', checkout.price - item.price)
        } else {
            checkoutStore.setField('checkout', 'price', checkout.price - checkout[state].price + item.price);
            checkoutStore.setField('checkout', state, item)
        }
    }

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        occasion: yup.string().required(),
        profession: yup.string().required(),
        hobby: yup.string().required(),
        label: yup.string(),
        noDescription: yup.boolean(),
        description: yup.string(),
    });

    const handleSubmit = (values) => {
        checkoutStore.setData({ ...values, peopleImages: files, petImages: petFiles });
        const validate = checkoutStore.validate();

        if (validate) {
            setIsCheckoutModalOpen(true);
        }
    }

    const handleErrorMsg = (errors, isValid, dirty) => {
        if (errors && !isValid && dirty) {
            toast({
                title: "You have some missing fields - please fill them and submit again",
                status: 'warning',
                duration: 10000,
                isClosable: true,
            })
        }
    }

    useEffect(() => {
        askBeforeRedirect();
    }, []);

    return (
        <Fragment>
            <CheckoutModal isOpen={isCheckoutModalOpen}
                onClose={() => setIsCheckoutModalOpen(false)} />
            <div className="contact_form container mb-30">
                <h2 className="heading_subtitle text-center" style={{ marginBottom: '20px' }}>
                    <span>Fill the form and submit your order</span>
                </h2>
                <Formik
                    className="inner"
                    validationSchema={schema}
                    onSubmit={(values) => {
                        handleSubmit(values)
                    }}
                    initialValues={{
                        name: checkout.name,
                        email: checkout.email,
                        occasion: checkout.occasion,
                        profession: checkout.profession,
                        hobby: checkout.hobby,
                        label: checkout.label,
                        noDescription: checkout.noDescription,
                        description: checkout.description,
                    }}
                >
                    {({ values, errors, isValid, dirty, touched }) => (
                        <Form
                            encType="multipart/form-data"
                            id="form"
                            style={{ padding: "2%" }}
                        >
                            <div className="row">
                                <div className="col col-md-6">
                                    <div className="form-group m-0">
                                        <Field
                                            className={`form-control ${(errors.name && touched.name) && 'error-border'}`}
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                </div>
                                <div className="col col-md-6">
                                    <div className="form-group m-0">
                                        <Field
                                            className={`form-control ${(errors.email && touched.email) && 'error-border'}`}
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>
                                <div className="text-center mt-30">
                                    <h4>Let's see what exactly do you want</h4>
                                </div>
                                <div className="col col-md-6">
                                    <div className="form-group m-0">
                                        <Field
                                            className={`form-control ${(errors.occasion && touched.occasion) && 'error-border'}`}
                                            type="text"
                                            name="occasion"
                                            placeholder="Occasion"
                                        />
                                    </div>
                                </div>
                                <div className="col col-md-6">
                                    <div className="form-group m-0">
                                        <Field
                                            className={`form-control ${(errors.profession && touched.profession) && 'error-border'}`}
                                            type="text"
                                            name="profession"
                                            placeholder="Person's profession"
                                        />
                                    </div>
                                </div>
                                <div className="col col-md-6">
                                    <div className="form-group m-0">
                                        <Field
                                            className={`form-control ${(errors.hobby && touched.hobby) && 'error-border'}`}
                                            type="text"
                                            name="hobby"
                                            placeholder="Person's Hobby"
                                        />
                                    </div>
                                </div>
                                <div className="col col-md-6">
                                    <div className="form-group m-0">
                                        <Field
                                            className="form-control"
                                            type="text"
                                            name="label"
                                            placeholder="Label to be displayed (optional)"
                                        />
                                    </div>
                                </div>
                                <div className='col col-md-6'>
                                    <div className="form-check mb-10 ml-10">
                                        <Field type="checkbox" id="checkMeOut" name='noDescription' />
                                        <label htmlFor="checkMeOut">I trust Cartoon Gifts to make me the cartoon with their idea, given my details</label>
                                    </div>
                                    {!values.noDescription && <div className="form-group">
                                        <Field
                                            as='textarea'
                                            rows="4"
                                            className="form-control"
                                            name="description"
                                            placeholder="Briefly describe what you want on your cartoon"
                                        ></Field>
                                    </div>}
                                </div>
                                <div className='col col-md-6'>
                                    <ImageInput files={files}
                                        setFiles={(newFiles) => {
                                            setFiles(newFiles);
                                            checkoutStore.setField('checkout', 'price', checkout.price - files.length * PERSON_IMAGE_PRICE + newFiles.length * PERSON_IMAGE_PRICE);
                                        }}
                                        onReject={(files) => checkoutStore.setInvalidField('invalidPeopleFiles')
                                        }
                                    />
                                    {invalidFields.includes('peopleImages') && <p className='error'>Please give us at least 1 image to work with</p>}
                                    {invalidFields.includes('invalidPeopleFiles') && <p className='error'>There was a problem with some of your files - they are either corrupted or exceed 5MB</p>}
                                    <small style={{ marginTop: '5px' }}>
                                        Make sure to:<br />
                                        - add pictures for any face you want on your cartoon (+{PERSON_IMAGE_PRICE}€ for each)<br />
                                        - describe what will be the background (beach, mountains, yacht, etc.)<br />
                                        - tell us are there any items with you (bottles, cars, helicopter, etc.) <br />
                                        - add anything that can be helpful
                                    </small>
                                </div>
                                <div className='col col-md-6' style={{ paddingBottom: '55px' }}>
                                    <h4>Do you want a pet in your cartoon (free of charge)</h4>
                                    <div className='card-price-box'>
                                        {PET_OPTIONS.map((item, index) => {
                                            return (
                                                <RadioCard key={index} onClick={() => setHasPet(item)} property={item.property} active={hasPet.property == item.property} />
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='col col-md-6'>
                                    {hasPet.property === 'Yes' && <Fragment>
                                        <h4>Pet Images</h4>
                                        <ImageInput files={petFiles}
                                            setFiles={(newFiles) => {
                                                setPetFiles(newFiles);
                                                checkoutStore.setField('checkout', 'price', checkout.price - petFiles.length * PET_IMAGE_PRICE + newFiles.length * PET_IMAGE_PRICE);
                                            }}
                                            onReject={(files) => checkoutStore.setInvalidField('invalidPetFiles')}
                                        />
                                        {invalidFields.includes('invalidPetFiles') && <p className='error'>There was a problem with some of your files - they are either corrupted or exceed 5MB</p>}
                                    </Fragment>}
                                </div>
                                <div className='col col-md-6'>
                                    <h4>Choose a size</h4>
                                    <div className='card-price-box'>
                                        {SIZE_ITEMS.map((item, index) => {
                                            return (
                                                <RadioPrice key={index} onClick={() => handlePriceChange(item, 'size')} property={item.property} price={!isNaN(item.price) && `+${item.price} €`} active={checkout.size.property == item.property} />
                                            )
                                        })}
                                    </div>
                                    {invalidFields.includes('size') && <p className='error'>Please select a size</p>}
                                </div>
                                <div className='col col-md-6'>
                                    <h4>Choose a delivery option</h4>
                                    <div className='card-price-box'>
                                        {DELIVERY_ITEMS.map((item, index) => {
                                            return (
                                                <RadioPrice key={index} onClick={() => handlePriceChange(item, 'delivery')} property={item.property} price={!isNaN(item.price) && `+${item.price} €`} active={checkout.delivery.property == item.property} />
                                            )
                                        })}
                                    </div>
                                    {invalidFields.includes('delivery') && <p className='error'>Please select a delivery option</p>}
                                </div>
                                <div className='col-6 mt-30'>
                                    <div>
                                        <h5>Total: {checkout.price} €</h5>
                                        <button type="submit" onClick={() => handleErrorMsg(errors, isValid, dirty)} className="bd-btn-link">
                                            <span className="bd-button-content-wrapper">
                                                <span className="bd-button-icon">
                                                    <i className="fa-light fa-arrow-right-long"></i>
                                                </span>
                                                <span className="pd-animation-flip">
                                                    <span className="bd-btn-anim-wrapp">
                                                        <span className="bd-button-text">Go To Checkout</span>
                                                        <span className="bd-button-text">Checkout</span>
                                                    </span>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Fragment>
    )
}

export default observer(OrderForm);
