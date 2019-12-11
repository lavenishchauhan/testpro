const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const {User, validate} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// router.get('/', async (req, res) => {
//   const users = await User.find().sort('name');
//   res.send(users);
// });


router.get('/me', auth, async (req, res) =>{
    //console.log('auth',req.user.tokenpro._id);
    const user = await User.findById(req.user.tokenpro._id).select('-password');
    res.send(user);
});


router.post('/', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email:req.body.email});
    if (user) return res.status(400).send('User already registered');

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        admin: req.body.admin,

    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt);

    console.log('user',user);
    user = await user.save();
   // const token =  jwt.sign({_id:user.id,name:user.name,admin:user.admin}, config.get('jwtPrivateKey'));

    tokenpro ={
        _id:user.id,
        name:user.name,
        admin:user.admin
    }
    const token = user.generateAuthToken(tokenpro);
    res.header('x-auth-token', token).send(_.pick(user,['_id','name','email','admin']));

  });


  module.exports = router;