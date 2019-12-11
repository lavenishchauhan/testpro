const auth = require('../middleware/auth');
const mongoose = require('mongoose');
const {Cart, validate} = require('../models/cart');
const express = require('express');
const router = express.Router();

const staticCarts = [
    {id:1, title:'Cart1'},
    {id:2, title:'Cart2'},
    {id:3, title:'Cart3'}
]

router.get('/',  async(req, res)=> {
    const cart = await Cart.find().sort('title');
   // console.log('cart', cart)
    res.send(cart);
});

// router.get('/:id', async(req, res)=> {
//     const cart = await Cart.find({cartId:req.params.id});
//     if(!cart)  return res.status(404).send('The cart with the given ID was not found.');

// if(cart == ''){
//     console.log('nocart',cart);
//     let cartt = [{
//         quantity: 0
//     }];
//     res.send(cartt);
// }
// else {
//     let cartt = [{
//         quantity: cart[0].quantity
//     }];

//     res.send(cartt);
// }

// });


router.post('/',  async(req, res) => {
   const cart = await Cart.find({cartId:req.body.cartId});
    //create new cart
    if(cart == ''){
        const {error} = validate(req.body);
        if(error) return res.status(404).send(error.details[0].message);
        let cart = new Cart({
            cartId: req.body.cartId,
            title: req.body.title,
            price:req.body.price,
            category: req.body.category,
            imgUrl: req.body.imgUrl,
            quantity: req.body.quantity
        });
        cart = await cart.save();
        res.send(cart);
    }

    //find Cart but quantity == 0 then delete this id
    if(!cart == ''){
        if(req.body.quantity === 0){
           console.log('findByIdAndRemove', cart[0]._id);
           const ItemDelete = await Cart.findByIdAndRemove(cart[0]._id);
            //console.log('findByIdAndRemove', cart);
            res.send(ItemDelete);
        }
        //find Cart and  quantity have value  then Update  quantity
        else{
           
            //console.log('req.body.quantity typeof', typeof(req.body.quantity));
            let cartUpdate = await Cart.findByIdAndUpdate(cart[0]._id,{
                quantity: req.body.quantity
                }, {new: true});
                cartUpdate = await cartUpdate.save();

                console.log('findByIdAndUpdate', cartUpdate);

                res.send(cartUpdate);
            // res.send(cart);
        }
       
    }
});


router.put('/:id', async(req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    console.log('test',req.params.id);

   let cart = await Cart.findByIdAndUpdate(req.params.id,{
    title: req.body.title,
    price:req.body.price,
    category: req.body.category,
    imgUrl: req.body.imgUrl
    }, {new: true});





    if(!cart) return  res.status(404).send('The cart with the given ID was not found.');

    cart = await cart.save();
    res.send(cart);
});



router.delete('/:id', async(req, res) => {
    const cart = await Cart.findByIdAndRemove(req.params.id);
    if(!cart) res.status(404).send('The cart with the given ID was not found.')

    const result = {
        "sucess":"delete",
        "cart":cart
    }
    res.send(result);
});



module.exports = router;

