const Product = require('./productSchema');


// Get all products
exports.getProducts = async (req, res) => {

    try {
        const data = await Product.find() //ger en array med alla produkterna
        res.status(200).json(data) //får tillbaka hela listan med alla produkter

    } catch (err) { //om fel
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Something went wrong when fetching the products',
            err
        })
    }
}


// Get one product, by id
exports.getProductById = (req, res) => {

    Product.exists({ _id: req.params.id }, (err, product) => { //sök igenom och kolla id mot mitt params id, kolla om den här produkten finns. Product är result

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request', //borde skriva vad man kan göra för att förhindra det här oxå i felmedd
            })
        }

        if(!product) {
            return res.status(404).json({
            statusCode: 404,
            status: false,
            message: 'Ooops, this product does not exist!',
            })
        }

        Product.findById(req.params.id)
            .then(data => res.status(200).json(data))
            .catch(err => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: err.message || 'Internal server error', 
            })
        })
    }) 
}


// Create new product
exports.createProduct = (req, res) => {
    // kolla namnen på alla produkter i db och kolla om de matchar det vi skrivit in nu
    Product.exists({ name: req.body.name }, (err, result) => { //kan få ett error el resultat. 

        // om vi får error har vi skickat på fel sätt, borde ge ngn form av serverfel (el möjligen bad request)
        if(err) {
            return res.status(500).json(err) //om vi får fel, sk tillbaka felet (som det är), avsluta det vi håller på med
        }

        // om vi får ett resultat(true), då finns den här produkten, då ska vi inte skapa en ny. Om fanns, har vi gjrot en bad request
        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'A product by that name already exists, please update product instead'
            })
        }
        // Om produktetn inte finns vill vi skapa en ny, talar om hur den nya prod ska se ut, skapa den
        Product.create({ //skapar en prod som innehåller allt enl schema
            name:       req.body.name,
            desc:       req.body.desc,
            price:      req.body.price,  
            imageURL:   req.body.imageURL
        })
        //när vi sparat ny prod, så våntar vi på ett svar
        .then(data => { //vill sk tillbaka det här
            res.status(201).json({ //sk response med status 201, ok. Sk med ett jsonobjekt med statuskod och medd
                statusCode: 201,
                status: true,
                message: 'Product created successfullly',
                data
            }) 
        }) //om ej gått bra, fått ngn form av error
        .catch(err => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to create product',
                err
            })
        })
    }) 
}


// Update product
exports.updateProduct = (req, res) => {
    Product.exists({ _id: req.params.id }, (err, result) => {
        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request', 
            })
        }

        if(!result) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Ooops, this product does not exist!',
            })
        }
        // om den finns så vill vi uppdatera den här, den som har det här idt
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) //vill ha den nya uppdaterade tillbaka
            .then(data => {
                res.status(200).json({ 
                    statusCode: 200,
                    status: true,
                    message: 'Product updated successfullly',
                    data
                }) 
            })
            .catch(err => {
                if(err.code === 11000) {
                    return res.status(400).json({
                        statusCode: 400,
                        status: false,
                        message: 'A product with that name already exists',
                        err
                    })
                }
                
                res.status(500).json({
                        statusCode: 500,
                        status: false,
                        message: 'Failed to update product',
                        err
                })
            })
    })
}


// Delete product
exports.deleteProduct = (req, res) => {
    //kollar att produkten vi vill ta bort finns
    Product.exists({ _id: req.params.id }, (err, result) => { 

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request', //borde skriva vad man kan göra för att förhindra det här oxå i felmedd
            })
        }

        if(!result) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Ooops, this product does not exist!',
            })
        }

        Product.deleteOne({ _id: req.params.id }) //kolla id mot alla i db, när hittar den som matchar, ta bort den 
            .then(() => {
                res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'Product deleted',
                })
            })
            .catch(err => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to delete product',
                    err
                })
            })
    })
}