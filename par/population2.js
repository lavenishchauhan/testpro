const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


const Author = mongoose.model('Author', new mongoose.Schema({
    name: String,
    bio: String,
    website: String
}));


async function createAuthor(name, bio, website) {

    const author = new Author({
        name,
        bio,
        website
    });

    const result = await author.save();
    console.log(result);

}


//createAuthor('Mosh', 'My bio', 'My Website');

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Author'
   }
}));






async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });

    const result = await course.save();
    console.log(result);
}

//createCourse('Mosh', '5d48057f1063542b28d64750');


async function listCourse(){
  const courses = await Course
  .find()
  .populate('author')
  .select('name author');
console.log(courses);
}

 listCourse();
