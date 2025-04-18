import { BASIC_PRICE, DELIVERY_ITEMS, ERROR_MESSAGE, PET_IMAGE_PRICE, SIZE_ITEMS } from '@utils/defines';
import { getJsonString } from '@utils/helpers';
import mailTrap from 'src/server/services/mail-trap';
import nodeMailer from 'src/server/services/node-mailer';
import { writeToGoogleSheet } from './google-api';
import moment from 'moment';

export const createOrder = async (orderData) => {
    const { orderNumber, images, name, email, occasion, profession, hobby, label, hasPet, description, size, date, canvas, payment, delivery, currency, country, city, address, zip, phone, promoCode } = orderData;
    const price = Math.ceil(orderData.price);
    let shipping;

    if (!country && !city && !address && !zip && !phone) {
        shipping = null
    } else {
        shipping = {
            country, city, address, zip, phone
        }
    }

    let failedDB = false;
    let failedEmail = false;

    try {
        await writeToGoogleSheet([
          moment().format("Do MMMM YYYY, h:mm:ss a"),
          orderNumber,
          name,
          email,
          occasion,
          profession,
          hobby,
          label,
          description,
          size,
          payment,
          delivery,
          price + " " + currency,
          `код: ${promoCode.value ?? ""} | отстъпка: ${
            promoCode.discount ?? ""
          }`,
          hasPet ? "yes" : "no",
          images.map((string, index) => `${index + 1}. ${string}\n`).join(", "),
          shipping.country ?? "-",
          shipping.city ?? "-",
          shipping.address ?? "-",
          shipping.zip ?? "-",
          shipping.phone ?? "-",
          date,
          canvas,
        ]);
    } catch (err) {
        console.log(err);
        failedDB = true;
    }

    
    try {
        await nodeMailer({
          subject: `New Order ${orderNumber}`,
          template: "order-notification.html",
          data: {
            orderNumber,
            name,
            email,
            occasion,
            profession,
            hobby,
            label,
            hasPet,
            description,
            size,
            date,
            canvas,
            payment,
            delivery,
            price: price + " " + currency,
            images,
            shipping,
            promoCode: promoCode.value,
          },
        });
    } catch (err) {
        failedEmail = true;
        console.log(err);
    }
    
    if (failedEmail && failedDB) {
        return { status: false, message: ERROR_MESSAGE }
    }
    
    try {
        await mailTrap({
          receiver: email,
          template_uuid: "b8a8baa1-ba8d-4199-acf6-7ecfaf47ec9a",
          subject: "Order Confirmed",
          data: {
            orderNumber,
            name,
            occasion,
            profession,
            hobby,
            label,
            hasPet,
            description,
            size,
            date,
            canvas,
            payment,
            delivery,
            price: price + " " + currency,
            images,
            shipping,
            promoCode: promoCode.value,
          },
        });
    } catch (err) {
        console.log(err);
    }


    return { status: true }
}
