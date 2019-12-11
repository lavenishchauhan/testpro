const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


const authorSchema =  new mongoose.Schema({
    name: String,
    bio: String,
    website: String
});

const Author = mongoose.model('Author',authorSchema);


const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    authors:[authorSchema]
   
}));

async function createCourse(name, authors) {
    const course = new Course({
        name,
        authors
    });

    const result = await course.save();
    console.log(result);
}

createCourse('Node Course', [
new Author({name:'Mosh',bio:'bio',website:'www'}),
new Author({name:'John',bio:'John bio',website:'wwwJohn'})
]);



async function updateAuthor(courseID){

   const course = await Course.findById(courseID);
   course.author.name = "Mosh Hamedani";
   course.save();

}


//updateAuthor('5d483f28544fb718083f809b');



// async function listCourse(){
//   const courses = await Course
//   .find()
//   .populate('author')
//   .select('name author');
// console.log(courses);
// }

//  listCourse();
