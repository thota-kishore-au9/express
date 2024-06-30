const express = require('express');
const bodyParser = require('body-parser'); //bodyparer is a middleware.Without this while posting it can't receive. 

const app = express();

app.use(bodyParser.json()); //while receiving it will receive in JSON format

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
    ]

app.get('/',( req, res)=>{
   res.send("Welcome to our Web server");
})

app.post('/users',(req, res)=>{ //req,res in call back function
   console.log(req.body);  //confirming whether our details are coming or not.
   users.push(req.body);
   res.status(200).send("User has been added successfully");
})

app.get('/users',(req , res)=>{
    res.send(JSON.stringify(users));
})

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
})

app.listen(3000,()=>{
    console.log("Server is up and running at http://localhost:3000");
})