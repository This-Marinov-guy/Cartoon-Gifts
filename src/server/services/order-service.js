import { BASIC_PRICE, DELIVERY_ITEMS, ERROR_MESSAGE, PET_IMAGE_PRICE, SIZE_ITEMS } from '@utils/defines';
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
    const { orderNumber, name, email, occasion, profession, hobby, label, hasPet, description, size, delivery, price, country, address, zip, phone } = orderData;
    const shipping = {
        country, address, zip, phone
    }

    const order = new Order({
        orderNumber, name, email, occasion, profession, hobby, label, hasPet, description, size, delivery, price, images, shipping
    })

    try {
        await order.save();

        if (await mailTrap({
            receiver: email,
            template_uuid: 'b8a8baa1-ba8d-4199-acf6-7ecfaf47ec9a',
            subject: 'Order Confirmed',
            data: {
                orderNumber, name, occasion, profession, hobby, label, hasPet, description, size, delivery, price, images, shipping
            }
        })) {

            await nodeMailer({
                subject: `New Order ${orderNumber}`,
                template: 'order-notification.html',
                data: {
                    orderNumber, name, email, occasion, profession, hobby, label, hasPet, description, size, delivery, price, images, shipping
                }
            });
        }

        return { status: true };
    } catch (err) {
        console.log(err);
        return { status: false, message: ERROR_MESSAGE }
    }
})
