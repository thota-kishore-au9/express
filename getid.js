const express = require('express');

const app = express();

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

app.get('/users',(req , res)=>{
    res.send(JSON.stringify(users));
})

app.get('/users/:id',(req , res)=>{   // to get the user by id

   console.log(req.params);  // details will display from sub obj req.params(params means parameters)
   const user = users.find(item => item.id === parseInt(req.params.id)); //to display the user by id we are sending 1 call back fun & to convert the id 
                                                 //from string format to number format we have to use parseInt
    
   console.log(user);

   if(user){  //if user is there
   res.status(200).send(JSON.stringify(user));//For successfull transfer& transfering fast and converting javascript object to JSON OBJECT and tranferring to us in JSON string format
  }
  else
  {
     res.status().send("Not Found");
  }
})

app.listen(3080,()=>{
    console.log("Server is up and running at http://localhost:3080");
})