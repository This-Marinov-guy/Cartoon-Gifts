import React, { Fragment, useState, useEffect, useRef } from 'react'
import ImageInput from '@components/common/inputs/image'
import RadioCard from '@components/common/inputs/radio-card'
import RadioPrice from '@components/common/inputs/radio-price'
import { Formik, Form, Field, useFormikContext } from "formik";
import * as yup from "yup";
import { SIZE_ITEMS, DELIVERY_ITEMS, PET_OPTIONS, PERSON_IMAGE_PRICE, PET_IMAGE_PRICE, SHIPPING_COUNTRIES, CURRENCIES, PAYMENT_OPTIONS, MATERIAL_OPTIONS, FIRST_POSSIBLE_DATE } from '@utils/defines';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/stores/storeContext';
import CheckoutModal from './checkout-modal';
import { Spinner, useToast } from '@chakra-ui/react';
import { askBeforeRedirect } from '@utils/globals';
import PriceAndCurrency from '@components/common/inputs/price-and-currency';
import useTranslation from 'next-translate/useTranslation';
import PromoCode from '@components/common/inputs/PromoCode';
import moment from 'moment';
import { dataUrlToFile } from '@utils/helpers';

// Persists Formik values to the store on every change (debounced 400ms)
const FormAutoSave = observer(() => {
    const { values, dirty } = useFormikContext();
    const { checkoutStore } = useStore();
    const timerRef = useRef(null);

    useEffect(() => {
        // Avoid creating/overwriting a "draft" until the user actually changes something.
        if (!dirty) return;
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            checkoutStore.saveFormValues(values);
        }, 400);
        return () => clearTimeout(timerRef.current);
    }, [values, dirty, checkoutStore]);

    return null;
});

const OrderForm = () => {
    const { currencyStore, checkoutStore } = useStore();
    const { multiplier, symbol } = currencyStore.currency;
    const { checkout, invalidFields } = checkoutStore;
    const toast = useToast();
    const { t, lang } = useTranslation('components');

    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
    const [formKey, setFormKey] = useState(0);

    const [files, setFiles] = useState([]);
    const [petFiles, setPetFiles] = useState([]);
    const [hasPet, setHasPet] = useState({ property: 'No', price: 0 });

    // ─── Restore images from localStorage on mount ───────────────────────
    useEffect(() => {
        const { peopleImageDataUrls, petImageDataUrls } = checkoutStore;

        if (peopleImageDataUrls.length > 0 && files.length === 0) {
            setFiles(peopleImageDataUrls.map((url, i) => dataUrlToFile(url, `${i + 1}.jpg`)));
        }

        if (petImageDataUrls.length > 0 && petFiles.length === 0) {
            setPetFiles(petImageDataUrls.map((url, i) => dataUrlToFile(url, `${i + 1}.jpg`)));
            setHasPet({ property: 'Yes', price: 0 });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const showShipping = (checkout.delivery.property && checkout.delivery.property !== 'Digital') || checkout.payment == PAYMENT_OPTIONS[1].value

    const handlePriceChange = (item, state) => {
        if (checkout[state].property === item.property) {
            checkoutStore.setField('checkout', state, { property: '', price: 0 });
            checkoutStore.setField('checkout', 'price', checkout.price - item.price);
        } else {
            checkoutStore.setField('checkout', 'price', checkout.price - checkout[state].price + item.price);
            checkoutStore.setField('checkout', state, item);
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
        payment: yup.string().required(),
        country: showShipping ? yup.string().required() : yup.string(),
        city: showShipping ? yup.string().required() : yup.string(),
        address: showShipping ? yup.string().required() : yup.string(),
        zip: showShipping ? yup.string().required() : yup.string(),
        phone: showShipping ? yup.string().required() : yup.string(),
    });

    const handleSubmit = (values) => {
        // Block submission while images are still uploading
        if (checkoutStore.isUploadingImages) {
            toast({
                title: t('common.inputs.imageInput.images_uploading'),
                status: 'info',
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        checkoutStore.setData({ ...values, peopleImages: files, petImages: petFiles });
        const validate = checkoutStore.validate();

        if (validate) {
            checkoutStore.calculateDiscount();
            setIsCheckoutModalOpen(true);
        } else {
            toast({
                title: t('extra-page.order.order-form.missingFields'),
                status: 'warning',
                duration: 10000,
                isClosable: true,
            })
        }
    }

    const handleErrorMsg = (errors, isValid, dirty) => {
        if (errors && !isValid && !dirty) {
            toast({
                title: t('extra-page.order.order-form.missingFields'),
                status: 'warning',
                duration: 10000,
                isClosable: true,
            })
        }
    }

    const handleClearForm = () => {
        checkoutStore.resetData();
        setFiles([]);
        setPetFiles([]);
        setHasPet({ property: 'No', price: 0 });
        setIsCheckoutModalOpen(false);
        setFormKey((k) => k + 1);
    };

    return (
      <Fragment>
        {isCheckoutModalOpen && (
          <CheckoutModal
            isOpen={isCheckoutModalOpen}
            onClose={() => setIsCheckoutModalOpen(false)}
          />
        )}
        <div className="contact_form container mb-30">
          <h2
            className="heading_subtitle text-center"
            style={{ marginBottom: "20px" }}
          >
            <span>{t("extra-page.order.order-form.formTitle")}</span>
          </h2>
          {checkoutStore.restoredFromLocalStorage && (
            <div className="saved-draft-banner text-center">
              <span className="saved-draft-banner__text">
                {t("extra-page.order.order-form.savedDraftNotice")}
              </span>
              <button
                type="button"
                onClick={handleClearForm}
                className="bd-btn-link btn_dark"
              >
                {t("extra-page.order.order-form.clearForm")}
              </button>
            </div>
          )}
          <Formik
            key={formKey}
            className="inner"
            validationSchema={schema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            initialValues={{
              name: checkout.name,
              email: checkout.email,
              occasion: checkout.occasion,
              profession: checkout.profession,
              hobby: checkout.hobby,
              label: checkout.label,
              date: checkout.date,
              noDescription: checkout.noDescription,
              description: checkout.description,
              payment: checkout.payment,
              country: checkout.shipping.country,
              city: checkout.shipping.city,
              address: checkout.shipping.address,
              zip: checkout.shipping.zip,
              phone: checkout.shipping.phone,
            }}
          >
            {({ values, errors, isValid, touched, dirty, setFieldValue }) => (
              <Form
                encType="multipart/form-data"
                id="form"
                style={{ padding: "2%" }}
              >
                <FormAutoSave />
                <div className="row">
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <Field
                        className={`form-control ${
                          errors.name && touched.name && "error-border"
                        }`}
                        type="text"
                        name="name"
                        placeholder={t("extra-page.order.order-form.yourName")}
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <Field
                        className={`form-control ${
                          errors.email && touched.email && "error-border"
                        }`}
                        type="email"
                        name="email"
                        placeholder={t(
                          "extra-page.order.order-form.emailAddress"
                        )}
                      />
                    </div>
                  </div>
                  <div className="text-center mt-30">
                    <h4>{t("extra-page.order.order-form.userQuestion")}</h4>
                  </div>
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <Field
                        className={`form-control ${
                          errors.occasion && touched.occasion && "error-border"
                        }`}
                        type="text"
                        name="occasion"
                        placeholder={t("extra-page.order.order-form.occasion")}
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <Field
                        className={`form-control ${
                          errors.profession &&
                          touched.profession &&
                          "error-border"
                        }`}
                        type="text"
                        name="profession"
                        placeholder={t(
                          "extra-page.order.order-form.profession"
                        )}
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <Field
                        className={`form-control ${
                          errors.hobby && touched.hobby && "error-border"
                        }`}
                        type="text"
                        name="hobby"
                        placeholder={t("extra-page.order.order-form.hobby")}
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <Field
                        className="form-control"
                        type="text"
                        name="label"
                        placeholder={t(
                          "extra-page.order.order-form.labelPlaceholder"
                        )}
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form-check mb-10 ml-10">
                      <Field
                        type="checkbox"
                        id="checkMeOut"
                        name="noDescription"
                      />
                      <label htmlFor="checkMeOut">
                        {t("extra-page.order.order-form.noDescription")}
                      </label>
                    </div>
                    {!values.noDescription && (
                      <div className="form-group">
                        <Field
                          as="textarea"
                          rows="4"
                          className="form-control"
                          name="description"
                          placeholder={t(
                            "extra-page.order.order-form.descriptionPlaceholder"
                          )}
                        ></Field>
                      </div>
                    )}
                  </div>
                  <div className="col col-md-6">
                    <ImageInput
                      type="people"
                      files={files}
                      setFiles={(newFiles) => {
                        setFiles(newFiles);
                        checkoutStore.setField(
                          "checkout",
                          "price",
                          checkout.price -
                            files.length * PERSON_IMAGE_PRICE +
                            newFiles.length * PERSON_IMAGE_PRICE
                        );
                      }}
                      onRemove={() => {
                        checkoutStore.setField(
                          "checkout",
                          "price",
                          checkout.price - PERSON_IMAGE_PRICE
                        );
                      }}
                      onReject={() =>
                        checkoutStore.setInvalidField("invalidPeopleFiles")
                      }
                    />
                    {invalidFields.includes("peopleImages") && (
                      <p className="error">
                        {t("extra-page.order.order-form.peopleImagesError")}
                      </p>
                    )}
                    {invalidFields.includes("invalidPeopleFiles") && (
                      <p className="error">
                        {t(
                          "extra-page.order.order-form.invalidPeopleFilesError"
                        )}
                      </p>
                    )}
                    <small style={{ marginTop: "5px" }}>
                      {t("extra-page.order.order-form.makeSureTo")}:<br />-{" "}
                      {t("extra-page.order.order-form.addPictures", {
                        price: PERSON_IMAGE_PRICE * multiplier,
                        symbol,
                      })}
                      <br />-{" "}
                      {t("extra-page.order.order-form.describeBackground")}
                      <br />- {t(
                        "extra-page.order.order-form.itemsWithYou"
                      )}{" "}
                      <br />-{" "}
                      {t("extra-page.order.order-form.addAnythingHelpful")}
                    </small>
                  </div>
                  <div className="col-12" style={{ paddingBottom: "55px" }}>
                    <h4>{t("extra-page.order.order-form.executionDate")}</h4>
                    <div
                      className="form-group m-0"
                      style={{ maxWidth: "30em" }}
                    >
                      <Field
                        className={`form-control ${
                          errors.date && touched.date && "error-border"
                        }`}
                        value={checkout.date}
                        min={moment().add(FIRST_POSSIBLE_DATE, "days").format("YYYY-MM-DD")}
                        type="date"
                        name="date"
                        placeholder={t("extra-page.order.order-form.date")}
                      />
                    </div>
                  </div>
                  <div
                    className="col col-md-6"
                    style={{ paddingBottom: "55px" }}
                  >
                    <h4>{t("extra-page.order.order-form.petQuestion")}</h4>
                    <div className="card-price-box">
                      {PET_OPTIONS.map((item, index) => {
                        return (
                          <RadioCard
                            key={index}
                            onClick={() => setHasPet(item)}
                            property={t(item.tag)}
                            active={hasPet.property == item.property}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="col col-md-6">
                    {hasPet.property === "Yes" && (
                      <Fragment>
                        <h4>{t("extra-page.order.order-form.petImages")}</h4>
                        <ImageInput
                          type="pet"
                          files={petFiles}
                          setFiles={(newFiles) => {
                            setPetFiles(newFiles);
                            checkoutStore.setField(
                              "checkout",
                              "price",
                              checkout.price -
                                petFiles.length * PET_IMAGE_PRICE +
                                newFiles.length * PET_IMAGE_PRICE
                            );
                          }}
                          onRemove={() => {
                            checkoutStore.setField(
                              "checkout",
                              "price",
                              checkout.price - PET_IMAGE_PRICE
                            );
                          }}
                          onReject={() =>
                            checkoutStore.setInvalidField("invalidPetFiles")
                          }
                        />
                        {invalidFields.includes("invalidPetFiles") && (
                          <p className="error">
                            {t(
                              "extra-page.order.order-form.invalidPetFilesError"
                            )}
                          </p>
                        )}
                      </Fragment>
                    )}
                  </div>
                  <div className="col col-md-6">
                    <h4>{t("extra-page.order.order-form.chooseSize")}</h4>
                    <div className="card-price-box">
                      {SIZE_ITEMS.map((item, index) => {
                        return (
                          <RadioPrice
                            key={index}
                            onClick={() => handlePriceChange(item, "size")}
                            property={item.property}
                            price={
                              !isNaN(item.price) &&
                              `+${item.price * multiplier} ${symbol}`
                            }
                            active={checkout.size.property == item.property}
                          />
                        );
                      })}
                    </div>
                    {invalidFields.includes("size") && (
                      <p className="error">
                        {t("extra-page.order.order-form.sizeError")}
                      </p>
                    )}
                  </div>
                  <div className="col col-md-6">
                    <h4>{t("extra-page.order.order-form.chooseDelivery")}</h4>
                    <div className="card-price-box">
                      {DELIVERY_ITEMS.map((item, index) => {
                        return (
                          <RadioPrice
                            key={index}
                            onClick={() => handlePriceChange(item, "delivery")}
                            property={t(item.tag)}
                            price={
                              !isNaN(item.price) &&
                              `+${item.price * multiplier} ${symbol}`
                            }
                            active={checkout.delivery.property == item.property}
                          />
                        );
                      })}
                    </div>
                    {invalidFields.includes("delivery") && (
                      <p className="error">
                        {t("extra-page.order.order-form.deliveryError")}
                      </p>
                    )}
                  </div>
                  {showShipping && (
                    <>
                      <h4>
                        {t("extra-page.order.order-form.shippingAddress")}
                      </h4>
                      <div className="col col-md-6">
                        <div className="form-group m-0">
                          <Field
                            as="select"
                            className={`form-control ${
                              errors.country &&
                              touched.country &&
                              "error-border"
                            }`}
                            name="country"
                            placeholder={t(
                              "extra-page.order.order-form.country"
                            )}
                          >
                            <option value="" disabled>
                              {t("extra-page.order.order-form.selectOption")}
                            </option>
                            {SHIPPING_COUNTRIES.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </Field>
                        </div>
                      </div>
                      <div className="col col-md-6">
                        <div className="form-group m-0">
                          <Field
                            className={`form-control ${
                              errors.city && touched.city && "error-border"
                            }`}
                            type="text"
                            name="city"
                            placeholder={t("extra-page.order.order-form.city")}
                          />
                        </div>
                      </div>
                      <div className="col col-md-6">
                        <div className="form-group m-0">
                          <Field
                            className={`form-control ${
                              errors.address &&
                              touched.address &&
                              "error-border"
                            }`}
                            type="text"
                            name="address"
                            placeholder={t(
                              "extra-page.order.order-form.address"
                            )}
                          />
                        </div>
                      </div>
                      <div className="col col-md-6">
                        <div className="form-group m-0">
                          <Field
                            className={`form-control ${
                              errors.zip && touched.zip && "error-border"
                            }`}
                            type="text"
                            name="zip"
                            placeholder={t(
                              "extra-page.order.order-form.zipCode"
                            )}
                          />
                        </div>
                      </div>
                      <div className="col col-md-6">
                        <div className="form-group m-0">
                          <Field
                            className={`form-control ${
                              errors.phone && touched.phone && "error-border"
                            }`}
                            type="text"
                            name="phone"
                            placeholder={t("extra-page.order.order-form.phone")}
                          />
                        </div>
                      </div>
                    </>
                  )}
                  <div
                    className="col-lg-6 col-12"
                    style={{ paddingBottom: "55px" }}
                  >
                    <h4>{t("extra-page.order.order-form.paymentMethod")}</h4>
                    <div className="card-price-box">
                      {PAYMENT_OPTIONS.map((item, index) => {
                        return (
                          <RadioCard
                            key={index}
                            onClick={() => {
                              setFieldValue("payment", item.value);
                              checkoutStore.setField(
                                "checkout",
                                "payment",
                                item.value
                              );
                            }}
                            property={t(item.tag)}
                            active={
                              checkoutStore.checkout.payment == item.value
                            }
                            error={errors.payment}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <h4>{t("extra-page.order.order-form.chooseKanava")}</h4>
                    <div className="card-price-box">
                      {MATERIAL_OPTIONS.map((item, index) => {
                        return (
                          <RadioPrice
                            key={index}
                            onClick={() => handlePriceChange(item, "canvas")}
                            property={item.property}
                            price={
                              !isNaN(item.price) &&
                              `+${item.price * multiplier} ${symbol}`
                            }
                            active={checkout.canvas.property == item.property}
                          />
                        );
                      })}
                    </div>
                   
                  </div>
                  <PromoCode />
                  <div className="col-lg-6 col-12 mt-30">
                    <div>
                      <PriceAndCurrency price={checkout.price} />
                      {checkoutStore.isUploadingImages && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: '0.88em', color: '#888' }}>
                          <Spinner size='xs' />
                          <span>{t('common.inputs.imageInput.images_uploading')}</span>
                        </div>
                      )}
                      <button
                        disabled={checkoutStore.isLoading || checkoutStore.isUploadingImages}
                        type="submit"
                        onClick={() => handleErrorMsg(errors, isValid, dirty)}
                        className="bd-btn-link"
                      >
                        <span className="bd-button-content-wrapper">
                          <span className="bd-button-icon">
                            <i className="fa-light fa-arrow-right-long"></i>
                          </span>
                          <span className="pd-animation-flip">
                            <span className="bd-btn-anim-wrapp">
                              <span className="bd-button-text">
                                {t("extra-page.order.order-form.goToCheckout")}
                              </span>
                              <span className="bd-button-text">
                                {t("extra-page.order.order-form.checkout")}
                              </span>
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
    );
}

export default observer(OrderForm);
