const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Category name is required'],
        unique: true,
        trim: true
    },
    image: {
        type: String,
        default: ""
    }

}, { timestamps: true })

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;