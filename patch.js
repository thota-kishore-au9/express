const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const users = [{
    id : 1,
    emailId : "student1@gmail.com",
    location: "Hyderabad"
    },
    {
    id : 2,
    emailId : "student2@gmail.com",
    location: "vizag"
    },
    {
    id : 3,
    emailId : "student3@gmail.com",
    location: "Banglore"
    }
    ];

app.get('/',( req, res)=>{
   res.send("Welcome to our Web server");
});

app.post('/users',(req, res)=>{
   console.log(req.body);
   users.push(req.body);
   res.status(200).send("User has been added successfully");
});

app.patch('/users/:id', (req, res)=>{       // patch is to update partial
    console.log(req.params);
    console.log(req.body);
    
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    if(userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...req.body };
       res.send(200).send("This is PUT method");
    } else {
        res.status(404).send("User not found");
    }
});

app.get('/users',(req , res)=>{
    res.send(JSON.stringify(users));
});

app.get('/users/:id',(req , res)=>{

   console.log(req.params);
   const user = users.find(item => item.id === parseInt(req.params.id));
    
   console.log(user);

   if(user){
   res.status(200).send(JSON.stringify(user));
  }
  else
  {
     res.status().send("Not Found");
  }
});

app.listen(3000,()=>{
    console.log("Server is up and running at http://localhost:3000");
});