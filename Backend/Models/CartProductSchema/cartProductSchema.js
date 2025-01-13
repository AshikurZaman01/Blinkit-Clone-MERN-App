
const mongoose = require('mongoose');

const cartProductSchema = new mongoose.Schema({

    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'product'
    },
    quantity: {
        type: Number,
        default: 1
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }

})

const CartModel = mongoose.model('CartProduct', cartProductSchema);
module.explores = CartModel;