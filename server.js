const express = require('express');

const app = express();

const users = [{
     id: 1,
     emailId: "student1@gmail.com",
     location: "Hyderabad"
},
{
    id: 2,
    emailId: "student2@gmail.com",
    location: "Vizag"
},
{
    id: 3,
    emailId: "student3@gmail.com",
    location: "Banglore"
}
]

app.get('/',(req,res)=>{
    res.send("Welcome to the web server");
})

app.get('/users',(req,res)=>{
    res.send(JSON.stringify(users));
})

app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");
})