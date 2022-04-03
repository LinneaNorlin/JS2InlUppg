const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  
// prova schema efter Emils förklaring:
  user: { type: mongoose.Schema.Types.ObjectId, ref:'user', required: true },
  //user tar in objectid från user
  cart: { type: Object, required: true },
  //cart är ett objekt med produkterna och quantity (antal får man i frontend, & kommer ha en cart [] i frontend)
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema);