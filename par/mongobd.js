const mongoose = require('mongoose');
const Course = require('./model/course');

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log('Could not connect to MongoDB...', err));

async function createCourse() {
    const course = new Course({
        name: 'Angular.js Course',
        author: 'Mosh',
        tags: ['node', 'backend'],
        isPublished: true
    })
    const result = await course.save();
}
//createCourse();


async function getCourse() {
    const courses = await Course.find();
    console.log(courses);
}
// getCourse();


async function updateCourse(id) {
   const courses = await Course.findByIdAndUpdate(id,{
       $set:{
           author:'Jack',
           isPublished:false
       }

   },{new:true});
   console.log(courses);
}

//updateCourse('5d456ab344602d219cb533f0');



async function removeCourse(id) {
    const course = await Course.findByIdAndRemove(id);
    console.log(course);
 }
 
 //removeCourse('5d4569b960b90a0fccd174dd');