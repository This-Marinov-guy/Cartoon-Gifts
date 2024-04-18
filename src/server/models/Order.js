import mongoose from 'mongoose';
import moment from 'moment';

var Schema = mongoose.Schema;

var order = new Schema({
    timestamp: {
        type: Date,
        default: moment().format('Do MMMM YYYY, h:mm:ss a')
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
    },
    delivery: {
        type: String,
    },
    price: {
        type: Number,
    },
    hasPet: {
        type: Boolean,
    },
    images: {
        type: [String],
        required: true,
    }
});

mongoose.models = {};

var Order = mongoose.model('Order', order);

export default Order;