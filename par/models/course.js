const mongoose = require('mongoose');
const Joi = require('joi');

const Course = mongoose.model('Course', new mongoose.Schema({
    name: {
        type: String
    },
    author: {
        type: String
    },
    tags: {
        type: [String]
    },
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: {
        type: Boolean
    }
}));

function validationCourse(course){
    const schema = {
        name:Joi.string().min(3).required(),
        author: Joi.string().min(3).required(),
        tags: Joi.array().required(),
        isPublished: Joi.boolean().required(),

    }
    return Joi.validate(course,schema);
}

module.exports.Course = Course;
module.exports.validate = validationCourse;