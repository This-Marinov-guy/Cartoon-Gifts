import ImageInput from '@components/common/inputs/image'
import React, { Fragment } from 'react'

const OrderForm = () => {

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
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
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
                        <div className='col'>
                            <ImageInput />
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    placeholder="Write your Message"
                                ></textarea>
                            </div>
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
                </form>
            </div>
        </Fragment>
    )
}

export default OrderForm