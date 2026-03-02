import React, { useState, Fragment } from 'react'
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
import useTranslation from 'next-translate/useTranslation'
import { getEurEquivalent, getEurEquivalentDisplay } from '@utils/currency-utils'

const CheckoutModal = (props) => {
    const { t } = useTranslation('components');

    const { currencyStore, checkoutStore } = useStore();
    const { currency } = currencyStore;
    const { checkout } = checkoutStore;

    const router = useRouter();

    const { sendRequest, loading } = useHttpClient();
    const [portalLoading, setPortalLoading] = useState(false);
    const [clientSecret, setClientSecret] = useState(null);

    const isOnlinePay = checkoutStore.checkout.payment == PAYMENT_OPTIONS[0].value;

    // Use locally-stored data URLs for preview — no FileReader needed
    const previewUrls = [
        ...checkoutStore.peopleImageDataUrls,
        ...checkoutStore.petImageDataUrls,
    ];

    const handleClose = () => {
        props.onClose();
    }

    const paymentReset = () => {
        setClientSecret(null);
    }

    const submitOrder = async () => {
        setPortalLoading(true);
        checkoutStore.calculateDiscount();

        // Images are already uploaded — setFormData includes orderNumber + Drive URLs
        const data = checkoutStore.setFormData(currency.value);

        if (!isOnlinePay) {
            const response = await sendRequest('/api/order/create', 'POST', data);
            if (response && response.status === true) {
                checkoutStore.resetData();
                router.push('/order/success');
            } else {
                setPortalLoading(false);
            }
        } else {
            const response = await sendRequest('/api/order/payment-intent', 'POST', data);
            if (response && response.status) {
                setClientSecret(response.clientSecret);
            }
            setPortalLoading(false);
        }
    }

    const body = clientSecret ? (
      <PaymentElement
        clientSecret={clientSecret}
        onClose={paymentReset}
        paymentProperties={{
          successUrl: `${window.location.origin}/order/success`,
          failUrl: `${window.location.origin}/order/fail`,
          email: checkout.email,
          amount: checkout.discountedPrice,
          currency: currencyStore.currency,
        }}
      />
    ) : (
      <Fragment>
        <h5 className="mb-20">
          {t("extra-page.order.checkout-modal.yourDetails")}
        </h5>
        <p>{t("extra-page.order.checkout-modal.name")}: {checkout.name}</p>
        <p>{t("extra-page.order.checkout-modal.email")}: {checkout.email}</p>
        <h5 className="mb-20 mt-20">
          {t("extra-page.order.checkout-modal.orderDetails")}
        </h5>
        <p>{t("extra-page.order.checkout-modal.occasion")}: {checkout.occasion}</p>
        <p>{t("extra-page.order.checkout-modal.profession")}: {checkout.profession}</p>
        <p>{t("extra-page.order.checkout-modal.hobby")}: {checkout.hobby}</p>
        <p>{t("extra-page.order.checkout-modal.label")}: {checkout.label}</p>
        <p>{t("extra-page.order.checkout-modal.description")}: {checkout.description}</p>
        <p>{t("extra-page.order.checkout-modal.canvas")}: {checkout.canvas.property}</p>
        <p>{t("extra-page.order.checkout-modal.date")}: {checkout.date}</p>
        <p>{t("extra-page.order.checkout-modal.size")}: {checkout.size.property}</p>
        <p>
          {t("extra-page.order.checkout-modal.payment")}:{" "}
          {t(PAYMENT_OPTIONS.find((option) => option.value == checkout.payment)?.["tag"])}
        </p>
        <p>{t("extra-page.order.checkout-modal.delivery")}: {t(checkout.delivery.tag)}</p>
        <p>{t("extra-page.order.checkout-modal.imageSelection")}</p>
        {previewUrls.length > 0 && (
          <div className="preview_box_small">
            {previewUrls.map((url, index) => (
              <img
                key={index}
                className="preview_small"
                src={url}
                alt="Preview"
              />
            ))}
          </div>
        )}
        <hr />
      </Fragment>
    );

    return (
        <Modal onClose={handleClose} isOpen={props.isOpen} isCentered closeOnOverlayClick={false} scrollBehavior='inside' size='lg'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{t('extra-page.order.checkout-modal.finishOrder')}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {portalLoading ? <SkeletonOne /> : body}
                </ModalBody>
                {!clientSecret && (
                  <ModalFooter>
                    <div className='center-ver'>
                      {checkout.discountedPrice !== checkout.price ? (
                        <div>
                          <h5>
                            {t('extra-page.order.checkout-modal.total')}:{' '}
                            <s>{checkout.price * currency.multiplier}</s>{' '}
                            {Math.ceil(checkout.discountedPrice * currency.multiplier)} {currency.symbol}
                          </h5>
                          {(() => {
                            const eurEquivalent = getEurEquivalent(checkout.discountedPrice, currency.value);
                            const eurDisplay = getEurEquivalentDisplay(eurEquivalent, { textAlign: 'center' });
                            return eurDisplay && (
                              <div style={eurDisplay.styles}>
                                <span>{eurDisplay.icon}</span>
                                <span>{eurDisplay.text}</span>
                              </div>
                            );
                          })()}
                        </div>
                      ) : (
                        <div>
                          <h5>
                            {t('extra-page.order.checkout-modal.total')}:{' '}
                            {Math.ceil(checkout.price * currency.multiplier)} {currency.symbol}
                          </h5>
                          {(() => {
                            const eurEquivalent = getEurEquivalent(checkout.price, currency.value);
                            const eurDisplay = getEurEquivalentDisplay(eurEquivalent, { textAlign: 'center' });
                            return eurDisplay && (
                              <div style={eurDisplay.styles}>
                                <span>{eurDisplay.icon}</span>
                                <span>{eurDisplay.text}</span>
                              </div>
                            );
                          })()}
                        </div>
                      )}
                      <div className='footer-btns'>
                        <button disabled={loading} type="button" onClick={handleClose} className="bd-btn-link btn_dark">
                          {t('extra-page.order.checkout-modal.back')}
                        </button>
                        <button disabled={loading} type="submit" onClick={submitOrder} className="bd-btn-link">
                          {loading ? <Spinner /> : (isOnlinePay
                            ? t('extra-page.order.checkout-modal.pay')
                            : t('extra-page.order.checkout-modal.order')
                          )}
                        </button>
                      </div>
                    </div>
                  </ModalFooter>
                )}
            </ModalContent>
        </Modal>
    )
}

export default observer(CheckoutModal)
