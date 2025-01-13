const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true
    },
    avatar: {
        type: String,
        default: ""
    },
    mobile: {
        type: String,
        default: null
    },
    refresh_token: {
        type: String,
        default: ""
    },
    verify_email: {
        type: Boolean,
        default: false
    },
    lastLoginDate: {
        type: Date,
        default: ""
    },
    status: {
        type: String,
        enum: ['active', 'deactive', 'suspended'],
        default: 'active'
    },
    addressDetails: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address"
        }
    ],
    shoppingCart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CartProduct"
        }
    ],
    orderHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ],

    forgetPasswordOtp: {
        type: String,
        default: ""
    },
    forgetPasswordExpiry: {
        type: Date,
        default: ""
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }

}, { timestamps: true })

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;