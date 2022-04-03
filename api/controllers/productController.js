const router = require('express').Router();
const productModel = require('../models/products/productModel');
const auth = require('../authentication/auth');


// Get all products
router.get('/', productModel.getProducts);

// Get one product, by id
router.get('/:id', productModel.getProductById);

// Create new product
router.post('/', auth.verifyToken, productModel.createProduct); //görs mot vår baseapi, 
//skyddar vår produkt genom att lägga in middleware (auth.verifyToken) emellan, när kör en POST på det här, om verify går bra så går vi till next, gör nästa - skapa ny produkt, annars går ej - skyddad. Måste vara inloggad för att få göra det.

// Update product
router.put('/:id', auth.verifyToken, productModel.updateProduct);
// router.put('/:id', auth.verifyToken, productModel.updateProduct);
//skyddar vår produkt genom att lägga in middleware (auth.verifyToken) emellan, när kör en POST på det här, om verify går bra så går vi till next, gör nästa - skapa ny produkt, annars går ej - skyddad. Måste vara inloggad för att få göra det.

// Delete product
router.delete('/:id', auth.verifyToken, productModel.deleteProduct); 
//skyddar vår produkt genom att lägga in middleware (auth.verifyToken) emellan, när kör en POST på det här, om verify går bra så går vi till next, gör nästa - skapa ny produkt, annars går ej - skyddad. Måste vara inloggad för att få göra det.










module.exports = router;