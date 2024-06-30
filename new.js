const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const users = [{
     
    id : 1,
    student : "student1@gmail.com",
    location : "Hyderabad"
},
{
    id : 2,
    student : "student2@gmail.com",
    location : "Banglore"
},
{
    id : 3,
    student : "student3@gmail.com",
    location : "Vizag"
}
]

app.get('/',(req, res)=>{
   console.log("Welcome to the webserver");
})

app.get('/users',(req,res)=>{
    res.send(JSON.stringify(users));
})

app.get('/users/:id',(req,res)=>{
    console.log(req.params);
    console.log(req.body);
    
    const user = users.find(item => item.id === parseInt(req.params.id));

    console.log(user);
    if(user) {
        res.status(200).send(JSON.stringify(users));
    }
    else {
       res.status(400).send("user not found");
    }
})

app.post('/users/:id',(req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.status(200).send("User has been added successfully");
})

app.patch('/users/:id',(req,res)=>{
    console.log(req.params);
    console.log(req.body);

    const user = users.find(item => item.id === parseInt(req.params.id));

    console.log(user);
    
    if(user) {
         user.location = user.body.location;
         res.status(200).send("User updated successfully");
    }
    else {
       res.status(400).send("User not found");
    }
})

app.put('/users/:id',(req,res)=>{
    console.log(req.params);
    console.log(req.body);

    const user = users.find(item => item.id === parseInt(req.params.id));

    console.log(user);

    if(user) {
        user.id = user.body.id;
        user.emailId = user.body.emailId;
        user.location = user.body.location;
        res.status(200).send("Existing user has been updated successfully");
    }
    else {
      res.status(200).send("User inserted successfuly");
    }
})

app.delete('/users/:id',(req,res)=>{
    console.log(req.params);
    
    const user = users.find(item => item.id === parseInt(req.params.id));

    if(User !== -1){

        user.splice(user, 1);
        res.status(200).send("User deleted successfully");
    }
    else {
       res.status(400).send("User not found");
    }
})

app.listen(3000,()=>{
   console.log("The server is up and running at http://localhost:3000");
})