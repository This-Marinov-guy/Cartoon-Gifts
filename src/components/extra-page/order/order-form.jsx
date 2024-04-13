import ImageInput from '@components/common/inputs/image'
import RadioPrice from '@components/common/inputs/radio-price'
import React, { Fragment, useState } from 'react'

const OrderForm = () => {
    const SIZE_ITEMS = [
        {
            property: 'A1',
            price: 0
        },
        {
            property: 'A2',
            price: 5
        },
        {
            property: 'A3',
            price: 10
        }
    ]

    const DELIVERY_ITEMS = [
        {
            property: 'Express',
            price: 15
        },
        {
            property: 'Normal',
            price: 5
        },
    ]

    const [files, setFiles] = useState([]);
    const [size, setSize] = useState({
        property: '',
        price: 0
    });
    const [delivery, setDelivery] = useState({
        property: 'Normal',
        price: 5
    });

    const [price, setPrice] = useState(55);

    const handlePriceChange = (item, state, callback) => {
        if (state.property === item.property) {
            callback({
                property: '',
                price: 0
            });
            setPrice((prevPrice) => prevPrice - item.price);
        } else {
            setPrice((prevPrice) => prevPrice - state.price + item.price);
            callback(item);
        }
    }

    const handleSubmit = () => { }

    return (
        <Fragment>
            <div className="contact_form container mb-30">
                <h2 className="heading_subtitle text-center" style={{ marginBottom: '20px' }}>
                    <span>Fill the form and submit your order</span>
                </h2>
                <form onSubmit={handleSubmit} action="#">
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="form-group m-0">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                />
                            </div>
                        </div>
                        <div className="col col-md-6">
                            <div className="form-group m-0">
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                />
                            </div>
                        </div>
                        <div className="text-center mt-30">
                            <h4>Let's see what exactly do you want</h4>
                        </div>
                        <div className='col col-md-6'>
                            <div className="form-group">
                                <textarea
                                    rows="4"
                                    className="form-control"
                                    name="message"
                                    placeholder="Briefly describe what you want on your cartoon"
                                ></textarea>
                            </div>
                        </div>
                        <div className='col col-md-6'>
                            <ImageInput files={files}
                                setFiles={(newFiles) => {
                                    setFiles(newFiles);
                                    setPrice((prevPrice) => prevPrice - files.length * 10 + newFiles.length * 10)
                                }} />
                            <small style={{ marginTop: '5px' }}>
                                Make sure to:<br />
                                - add pictures for any face/animal you want on your cartoon (+10£ for each extra)<br />
                                - describe what will be the background (beach, mountains, yacht, etc.)<br />
                                - are there any items with you (bottles, cars, helicopter, etc.) <br />
                                - anything that can be helpful (I want to be Batman)
                            </small>
                        </div>
                        <div className='col col-md-6'>
                            <h4>Choose a size</h4>
                            <div className='card-price-box'>
                                {SIZE_ITEMS.map((item, index) => {
                                    return (
                                        <RadioPrice key={index} onClick={() => handlePriceChange(item, size, setSize)} property={item.property} price={!isNaN(item.price) && `+${item.price} £`} active={size.property == item.property} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className='col col-md-6'>
                            <h4>Choose a delivery option</h4>
                            <div className='card-price-box'>
                                {DELIVERY_ITEMS.map((item, index) => {
                                    return (
                                        <RadioPrice key={index} onClick={() => handlePriceChange(item, delivery, setDelivery)} property={item.property} price={!isNaN(item.price) && `+${item.price} £`} active={delivery.property == item.property} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className='col-6 mt-30'>
                            <div>
                                <h5>Total: {price} £</h5>
                                <button type="submit" className="bd-btn-link">
                                    <span className="bd-button-content-wrapper">
                                        <span className="bd-button-icon">
                                            <i className="fa-light fa-arrow-right-long"></i>
                                        </span>
                                        <span className="pd-animation-flip">
                                            <span className="bd-btn-anim-wrapp">
                                                <span className="bd-button-text">Send Now</span>
                                                <span className="bd-button-text">Send Now</span>
                                            </span>
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default OrderForm