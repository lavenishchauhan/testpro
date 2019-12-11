const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        minlength:5,
        maxlength:50
    },
    email: {
        type: String,
        required:true,
        minlength:5,
        maxlength:255,
        unique:true
    },
    password: {
        type: String,
        required:true,
        minlength:5,
        maxlength:1024
    },
    admin: {
        type: Boolean,
        default:true,
        required:true,
    },
  
})


userSchema.methods.generateAuthToken = function(tokenpro){
    const token =  jwt.sign({tokenpro}, config.get('jwtPrivateKey'));
   return token;

}

const User = mongoose.model('User', userSchema);


function validationUser(user){
    const schema = {
        name:Joi.string().min(5).max(50).required(),
        email: Joi.string().min(3).max(255).required().email(),
        password:Joi.string().min(5).max(255).required(),
        admin:Joi.boolean()
       
    }
    return Joi.validate(user,schema);
}

module.exports.User = User;
module.exports.validate = validationUser;