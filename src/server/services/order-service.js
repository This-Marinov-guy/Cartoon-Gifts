import { BASIC_PRICE, DELIVERY_ITEMS, ERROR_MESSAGE, PET_IMAGE_PRICE, SIZE_ITEMS } from '@utils/defines';
import { getJsonString } from '@utils/helpers';
import connectDB from 'src/server/middleware/mongodb';
import Order from 'src/server/models/Order';
import mailTrap from 'src/server/services/mail-trap';
import nodeMailer from 'src/server/services/node-mailer';

export const validatePrice = (inputs, files) => {
    const { size, delivery, price } = inputs
    const images = Object.values(files);

    const calcPrice = BASIC_PRICE + SIZE_ITEMS.find(item => item.property === size).price + DELIVERY_ITEMS.find(item => item.property === delivery).price + images.length * PET_IMAGE_PRICE

    if (price - calcPrice < 20) {
        return false
    }

    return true;
}

export const createOrder = connectDB(async (orderData) => {
    const { orderNumber, name, email, occasion, profession, hobby, label, hasPet, description, size, payment, delivery, currency, country, city, address, zip, phone } = orderData;
    const price = Math.ceil(orderData.price);
    let shipping;

    if (!country && !city && !address && !zip && !phone) {
        shipping = null
    } else {
        shipping = {
            country, city, address, zip, phone
        }
    }

    const images = getJsonString(orderData.images) || orderData.images

    const order = new Order({
        orderNumber, name, email, occasion, profession, hobby, label, hasPet, description, size, payment, delivery, price: price + ' ' + currency, images, shipping
    })

    try {
        await order.save();

        const clientEmailResponse = await mailTrap({
            receiver: email,
            template_uuid: 'b8a8baa1-ba8d-4199-acf6-7ecfaf47ec9a',
            subject: 'Order Confirmed',
            data: {
                orderNumber, name, occasion, profession, hobby, label, hasPet, description, size, payment, delivery, price: price + ' ' + currency, images, shipping
            }
        })

        if (clientEmailResponse) {
            await nodeMailer({
                subject: `New Order ${orderNumber}`,
                template: 'order-notification.html',
                data: {
                    orderNumber, name, email, occasion, profession, hobby, label, hasPet, description, size, payment, delivery, price: price + ' ' + currency, images, shipping
                }
            });
        }

        return { status: true };
    } catch (err) {
        console.log(err);
        return { status: false, message: ERROR_MESSAGE }
    }
})
