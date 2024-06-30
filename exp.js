const express = require('express');
const bodyParser = require('body-parser'); //bodyparer is a middleware.Without this while posting it can't receive. 
                                          //we use the middleware to understand the receiving data from frontend.

const app =  express();  //express is function , by invoking this inbuit it will return an application
 
app.use(bodyParser.json()); //while receiving it will receive in JSON format

const users = [{
    id: 1,
    emailId: "student1@gmail.com",
    location: "Hyderabad" 
},
{
    id: 2,
    emailId: "student2@gmail.com",
    location: "Banglore"
},
{
    id: 3,
    emailId: "student3@gmail.com",
    location: "chennai"
}
]

app.get('/',(req, res) => {
    res.send("Welcome to the web server");
})

app.get('/users',(req, res) => {
    res.send(JSON.stringify(users));
})

app.get('/users/:id',(req, res) => {
    console.log("req.params");
    console.log("req.body");
    const user = users.find(item => item.id === parseInt(req.params.id));

    console.log(user);

    if(user){
       res.status(200).send(JSON.stringify(user));
    }
    else {
       res.status(404).send("user not found");
    }
})

app.post('/users',(req, res)=>{ //req,res in call back function
    console.log(req.body);  //confirming whether our details are coming or not.
    users.push(req.body); //to push the data to post
    res.status(200).send("User has been added successfully");
})

app.patch('/users/:id',(req, res)=>{
    console.log(req.params);
    console.log(req.body);
    
    const user = users.find(item => item.id === Number(req.params.id)); //to find the exact record along with id

    if(user){                               //if user exists then it updates
        user.location = req.body.location;
        res.status(200).send("Updated the user successfully");
    }
    else {                             //if user is not there then it display's user not found
      res.status(404).send("User not found");
    }
})

app.put('/users/:id',(req, res)=>{
    console.log(req.params);
    console.log(req.body);
    
    const user = users.find(item => item.id === Number(req.params.id));

    if(user) {
        user.id = req.body.id;
        user.emailId = req.body.emailId;
        user.location = req.body.location;

       res.status(200).send("Existing USER || Updated successfully");
    }
    else {
        users.push(req.body);
       res.status(200).send("User added successfully");
    }
})

app.delete('/users/:id',(req, res)=>{
    console.log(req.params); //logs the route parameters for debugging purposes.
   // Find the index of the user with the given ID
    const user = users.find(item => item.id === Number(req.params.id)); //finds the index of the user in the users array with the 
                                                                        //ID provided in the route parameter.

    if (user !== -1) { //checks if the user was found.
        // Remove the user from the array
        users.splice(user, 1); //removes the user from the array if found.
        res.status(200).send("Deleted the user successfully"); //sends a success response if the user is deleted.
    }
    else {
      res.status(404).send("User not found"); //sends a 404 response if the user is not found.
    }
})

app.listen(3000,() => {
    console.log("Server is up and running at http://localhost:3000");
})