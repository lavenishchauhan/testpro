const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// router.get('/', async (req, res) => {
//   const users = await User.find().sort('name');
//   res.send(users);
// });

// mongodb+srv://prodDB:<evaakki@123>@cluster0-whdpe.mongodb.net/test

// mongodb://<prodDB>:<evaakki@123>@cluster0-shard-00-00-whdpe.mongodb.net:27017,cluster0-shard-00-01-whdpe.mongodb.net:27017,cluster0-shard-00-02-whdpe.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin

 

router.post('/', async (req, res) => {
    console.log('req', req.body);
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email:req.body.email});
    if (!user) return res.status(400).send('Invalid email or password.');

    const validPassword = await bcrypt.compare(req.body.password,user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password.');

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt);

    //const token =  jwt.sign({_id:user.id,name:user.name,admin:user.admin}, config.get('jwtPrivateKey'));
     tokenpro ={
      _id:user.id,
      name:user.name,
      admin:user.admin
    }
   const token = user.generateAuthToken(tokenpro);
   console.log(user.name);

    //res.send(token);
    sucess = {
      login:true,
      token:token,
    
    }
    res.send(sucess);
  });


  function validate(auth){
    const schema = {
        email: Joi.string().min(3).max(255).required().email(), 
        password:Joi.required(),
    }
    return Joi.validate(auth,schema);
}

  module.exports = router;