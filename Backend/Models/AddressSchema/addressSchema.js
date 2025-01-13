const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({

    addressLine: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    country: {
        type: String
    },
    mobile: {
        type: String,
        default: null
    },
    status: {
        type: Boolean,
        default: true
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    }

}, { timestamps: true })

const AddressModel = mongoose.model('Address', addressSchema);
module.exports = AddressModel;