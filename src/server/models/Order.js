import mongoose from 'mongoose';
import moment from 'moment';

var Schema = mongoose.Schema;

var order = new Schema({
    timestamp: {
        type: String,
        default: moment().format('Do MMMM YYYY, h:mm:ss a')
    },
    orderNumber: {
        type: String, 
        required: true,
        unique: true 
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    occasion: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    hobby: {
        type: String,
        required: true
    },
    label: {
        type: String,
    },
    description: {
        type: String,
    },
    size: {
        type: String,
        required: true
    },
    delivery: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    hasPet: {
        type: Boolean,
    },
    images: {
        type: [String],
        required: true,
    },
    shipping: {
        country: {
            type: String,
        },
        address: {
            type: String,
        },
        zip: {
            type: String,
        },
        phone: {
            type: String,
        },
    }

});

mongoose.models = {};

var Order = mongoose.model('Order', order);

export default Order;