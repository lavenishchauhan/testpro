const mongoose = require('mongoose');
const Joi = require('joi');

const Cart = mongoose.model('Cart', new mongoose.Schema({
    cartId: {
        type: String
    },
    title: {
        type: String
    },
    price: {
        type: String
    },
    category: {
        type: String
    },
    imgUrl: {
        type: String
    },
    quantity:{
        type: Number
    }
  
}));

function validationCart(Cart){
    const schema = {
        cartId:Joi.string(),
        title:Joi.string(),
        price: Joi.string(),
        category: Joi.string(),
        imgUrl: Joi.string(),
        quantity: Joi.number()
       
      
    }
    return Joi.validate(Cart,schema);
}

module.exports.Cart = Cart;
module.exports.validate = validationCart;