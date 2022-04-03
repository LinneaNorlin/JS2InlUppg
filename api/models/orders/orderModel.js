const Order = require('./orderSchema');
const bcrypt = require('bcryptjs');
const auth = require('../../authentication/auth');


//Get all orders 
exports.getOrders = async (req, res) => {

    try {
        const data = await Order.find({ user: req.userData.id }) //ger en array med alla ordrar, filterat efter userid på inloggad user?
        res.status(200).json(data) //får tillbaka hela listan med alla ordrar?
    } catch (err) { //om fel
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Something went wrong when fetching the orders',
            err
        })
    } //Måste fixa felhantering, det här är inte ok!
}
//Create order
exports.createOrder = (req, res) => {  
    // console.log(req) //kolla vad du får i requesten, det är från req du tar in userData.id
    
    // vill skapa en order, måste tala om vad den ska innehålla sen skapas den. 
    Order.create({ //skapar en order som innehåller posterna enl order schema

    user:  req.userData.id, //userData kommer från auth, måste ha middleware i controllern
    cart:  req.body.cart //tar bodyn från Order (från orderschema)?
    })
     //när vi sparat ny order, så våntar vi på ett svar
    .then(data => { //vill sk tillbaka det här
        res.status(201).json({ //sk response med status 201, ok. Sk med ett jsonobjekt med statuskod och medd
          statusCode: 201,
          status: true,
          message: 'Order created successfullly',
          data
        }) 
    }) //om ej gått bra, fått ngn form av error
    .catch(err => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to create order',
          err
          })
    })
}
