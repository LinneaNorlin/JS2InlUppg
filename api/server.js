const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 9999;

const serverURI = 'http://localhost:' + PORT;
const mongoURI = process.env.MONGO_URI;

app.listen(PORT, () => console.log('Server: ' + serverURI)); //för lätt åtkomst till localhost i terminalen

if(!mongoURI) {
    console.log('no environment variable found.')
} //det här behövs eg inte, men koll för egen skull ifall man inte skulle ha .envfilen och får fel så ser man vad som gått fel...
else {
    mongoose.connect(mongoURI, () => console.log('Connected to DB')) //consolelog bara så ser att vi är connectade till DB
}