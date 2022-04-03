const router = require('express').Router();
const orderModel = require('../models/orders/orderModel');
const auth = require('../authentication/auth');

// Get all orders for logged in user osv
router.get('/', auth.verifyToken, orderModel.getOrders);
// vart ska jag gå? Göra en /getorders, eller /:id ?

// Middleware (auth.verifyToken) emellan! Därifrån kommer userData som jag anv för att koppla
// ordern till usern. 
// När kör en GET på det här, om verify går bra så går vi till next, gör nästa - skapa order, annars går ej. 
router.post('/createorder', auth.verifyToken, orderModel.createOrder); //ska jag gå mot baseAPI, eller mot /createOrder
// måste vara inloggad för att kunna skapa order



module.exports = router;