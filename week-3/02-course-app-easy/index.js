const express = require('express');
const app = express();

app.use(express.json());

app.use()

let ADMINS = [];
let USERS = [];
let COURSES = [];

// Admin routes
app.post('/admin/signup', (req, res) => {
  console.log(req.body)
  ADMINS.push(req.body)
  res.status(202).json({message:'Admin created sucessfully'})

  // logic to sign up admin
});

app.post('/admin/login', (req, res) => {

  let {username,password} = req.header

   if (ADMINS.find(value=>value.username==username && value.password==password)){

    res.status(200).json({message:"Logged in sucessfully"})
   }
  // logic to log in admin
});

app.post('/admin/courses', (req, res) => {
  // logic to create a course

  let {username,password} = req.header

  if (ADMINS.find(value=>value.username==username && value.password==password)){
         
        COURSES.push(req.body)
        res.send(202).json({message:"course created sucessfuly ",courseid:COURSES.length})
      }
});

app.put('/admin/courses/:courseId', (req, res) => {
  // logic to edit a course
  let id=req.params.courseId
  let {username,password} = req.header

  if (ADMINS.find(value=>value.username==username && value.password==password)){
         
        
  if(id<=COURSES.length){
    console.log("wait")
    COURSES[id]=req.body
    res.status(202).json({message:"course has been oupdated sucessfuly"})
  }

      }

});

app.get('/admin/courses', (req, res) => {
  // logic to get all courses

  let id=req.params.courseId
  let {username,password} = req.header

  if (ADMINS.find(value=>value.username==username && value.password==password)){
         
        
  res.status(202).json({"all Courses": COURSES})
      }


      else{
        res.status(404).send("wrong username and password please look into it ")
      }
});











// User routes
app.post('/users/signup', (req, res) => {
  // logic to sign up user
});

app.post('/users/login', (req, res) => {
  // logic to log in user
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
