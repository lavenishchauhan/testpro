const dotenv = require('dotenv');
const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const courses = require('./routes/courses');
const products = require('./routes/products');
const carts = require('./routes/carts');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');

const auth = require('./routes/auth');

const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors')
const app = express();
const result = dotenv.config({ path: './config/config.env' })
 
// if (result.error) {
//   throw result.error
// }
 
// console.log(result.parsed)
// console.log("env", process.env);


if(!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivatekey is not defined.');
    process.exit(1);
}

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false})
.then( con=>{
   // console.log(con.connection);
    console.log('DB connection Successful!');

}).catch((err)=> console.log("err", err));

// mongoose.connect('mongodb://localhost/vidly')
//     .then(() => console.log('Connected to MongoDB...'))
//     .catch((err) => console.log('Could not connect to MongoDB...', err));  

app.use(express.json());
app.use(cors());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/products', products);
app.use('/api/carts', carts);
app.use('/api/courses', courses);
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);


const port = process.env.port  ||  3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));






