const mongoose = require('mongoose');
const Joi = require('joi');

const Product = mongoose.model('Product', new mongoose.Schema({
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
    }
  
}));

function validationProduct(product){
    const schema = {
        title:Joi.string().min(3).required(),
        price: Joi.string().required(),
        category: Joi.string().required(),
        imgUrl: Joi.string().required(),
      
    }
    return Joi.validate(product,schema);
}

module.exports.Product = Product;
module.exports.validate = validationProduct;