const auth = require('../middleware/auth');
const mongoose = require('mongoose');
const {Product, validate} = require('../models/product');
const express = require('express');
const router = express.Router();

const staticProducts = [
    {id:1, title:'Product1'},
    {id:2, title:'Product2'},
    {id:3, title:'Product3'}
]

router.get('/',  async(req, res)=> {
    const products = await Product.find().sort('title');
    res.send(products);
});

router.get('/:id', async(req, res)=> {
     const product = await Product.findById(req.params.id);
     if(!product)  return res.status(404).send('The product with the given ID was not found.')
     
    res.send(product);
    
});


router.post('/', auth, async(req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    let product = new Product({
        title: req.body.title,
        price:req.body.price,
        category: req.body.category,
        imgUrl: req.body.imgUrl
    });

    product = await product.save();
    res.send(product);
});


router.put('/:id', auth,async(req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    console.log('test',req.params.id);

   let product = await Product.findByIdAndUpdate(req.params.id,{
    title: req.body.title,
    price:req.body.price,
    category: req.body.category,
    imgUrl: req.body.imgUrl
    }, {new: true});

   
    if(!product) return  res.status(404).send('The product with the given ID was not found.');

    product = await product.save();
    res.send(product);
});



router.delete('/:id', async(req, res) => {
    const product = await Product.findByIdAndRemove(req.params.id);
    if(!product) res.status(404).send('The product with the given ID was not found.')

    const result = {
        "sucess":"delete",
        "product":product
    }
    res.send(result);
});



module.exports = router;

