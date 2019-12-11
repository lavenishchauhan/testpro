const auth = require('../middleware/auth');
const mongoose = require('mongoose');
const {Course, validate} = require('../models/course');
const express = require('express');
const router = express.Router();

const staticCourses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
]

router.get('/', auth, async(req, res)=> {
    const courses = await Course.find().sort('name');
    res.send(courses);
});

router.get('/:id',auth, async(req, res)=> {
     const course = await Course.findById(req.params.id);
     if(!course)  return res.status(404).send('The course with the given ID was not found.')
     
    res.send(course);
    
});


router.post('/', auth, async(req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    let course = new Course({
        name: req.body.name,
        author:req.body.author,
        tags: req.body.tags,
        isPublished: req.body.isPublished
    });

    course = await course.save();
    res.send(course);
});


router.put('/:id', async(req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    console.log('test');

   let course = await Course.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        author:req.body.author,
        tags: req.body.tags,
        isPublished: req.body.isPublished
    }, {new: true});

   
    if(!course) return  res.status(404).send('The course with the given ID was not found.');

    course = await course.save();
    res.send(course);
});



router.delete('/:id', async(req, res) => {
    const course = await Course.findByIdAndRemove(req.params.id);
    if(!course) res.status(404).send('The course with the given ID was not found.')

    const result = {
        "sucess":"delete",
        "course":course
    }
    res.send(result);
});



module.exports = router;

