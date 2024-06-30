const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const users = [{
    
     id: 1,
     emailId: "student1@gmail.com",
     location: "Hyderabad"
},
{
    id: 2,
    emailId: "student2@gmail.com",
    location: "vizag"
},
{
    id: 3,
    emailId: "student3@gmail.com",
    location: "Mangalagiri"
}
]

app.get('/',(req, res) => {
   res.send("Welcome to the Webserver");
})

app.get('/users',(req, res) => {
   res.send(JSON.stringify(users));
})

app.get('/users/:id',(req, res) => {
   console.log(req.params);
   console.log(req.body);

   const user = users.find(users => users.id === parseInt(req.params.id));
    
   console.log(user);

   if(user) {
      res.status(200).send(JSON.stringify(user));
    }
    else {
      res.status(404).send("User not found");
    }

 app.post('/users/:id',(req, res) =>{
     console.log(req.body);
     users.push(req.body);
      
     res.status(200).send("User has been added successfully");
 })

 app.put('/users/:id',(req, res) =>{
    console.log(req.params);
    console.log(req.body);
    
    const user = users.find(users => users.id === parseInt(req.params.id));

    console.log(user);
    
    if(user) {
         user.id = req.body.id;
         user.emailId = req.body.emailId;
         user.location = req.body.location;
        res.status(200).send("User updated successfully");
    }
    else {
        user.push(req.body);
       res.status(200).send("User has been added successfully");
    }
 })
  
  app.patch('/user/:id',(req, res) => {
     console.log(req.params);
     console.log(req.body);

     const user = users.find(users => users.id === parseInt(req.params.id));

     console.log(user);

     if(user) {
        res.status(200).send("User has been updated successfully");
     }
     else {
        res.status(400).send("User not found");
     }
  })
})