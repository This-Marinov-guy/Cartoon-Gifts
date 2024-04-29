import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var user = new Schema({
    roles: {
        type: [String],
        required: true,
        default: ['user']
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        // required: true,
    },
    birth: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;