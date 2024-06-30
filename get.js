const express = require('express');    //importing expressJS package in to our file get.JS

const app = express();  //express is function , by invoking this inbuit it will return an application

const users = [{     //creating an array and inserting objects
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

app.get('/',( req, res)=>{               // when request is sending from client '/' is path, it will execute this get method req & res parameters are imp
   res.send("Welcome to our Web server");
})

app.get('/users',(req , res)=>{     
    res.send(JSON.stringify(users)); // For transfering fast and converting javascript object to JSON OBJECT and tranferring to us in JSON string format
})
//to intiate the application this app.listen is very usefull
// once revise arrow and call back functions , then once see and learn
app.listen(3000,()=>{  //this is to run server on port 3000 & while server is running then this message will display
    console.log("Server is up and running at http://localhost:3000");
})