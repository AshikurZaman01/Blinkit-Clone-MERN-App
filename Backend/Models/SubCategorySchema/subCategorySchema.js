const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subcategory name is required'],
        unique: true,
        trim: true
    },
    image: {
        type: String,
        default: ""
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        required: true
    }
}, { timestamps: true });

const subCategoryModel = mongoose.model('SubCategory', subCategorySchema);
module.exports = subCategoryModel;
