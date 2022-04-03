const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:       { type: String, required: true, unique: true },
    desc:       { type: String, required: true },
    price:      { type: Number, required: true },
    imageURL:   { type: String, required: true },
// Behöver inte lägga till quantity här, quantitydelen gör man i frontend i cart!!*/
}, { timestamps: true }) // ska jag ha en timestamp oxå?


module.exports = mongoose.model('Product', productSchema);