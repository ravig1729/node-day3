const express = require("express");
const app = express();

// app.get("/",(req,res)=>{
//      //res.sendStatus(201)
//      res.send("Success")
// })

//http://localhost:3001/


//Sending the data in two ways -

//1. Using Query Params : It passes the multiple key value pairs

// app.post("/addUser",(req,res)=>{
//     console.log(req.query);
//     // res.send(req.query)
//     res.send("Success")
// })

//http://localhost:3001/addUser?name=Chetan&class=HSC


//2. Using URL Params : It passes the single value
app.put("/editUser/:id",(req,res)=>{
    console.log(req.params);
    res.send("Success")
})


app.listen(3001, () => {
    console.log("Server is running at port 3001");
});



//sending the data -
// Query Params : name:"Chetan", age:"12", dept:"HR"   key value pair - json format
// url Params :  12  single value,  - normal value


//http://localhost:3001/ or http://0.0.0.0:3001/

//All the API testing (backend testing) inside POSTMAN
//By default http method is GET


//http://localhost:3001/apiroute?name=Chetan&class=HSC = one parameter & second parameter initiate with &

//app.get("/",(req,res) 
//app.get = get is http method
//"/" = route path    & url path is complete url on browser


// HTTP Method: GET, POST, PUT, DELETE
// Status Code: 200 OK

// Request method decides that what type of API you are having
// CRUD APPLICATION 
// GET : Sending the data to the front end 
// POST : Receive the data from the front end 
// UPDATE/PUT : Receive the data and update in DB
// DELETE : Receive the data from front end and delete in DB


// Status Code : Is a code which helps front end to understand that if the API is working fine or not 
// 200 : Successful, API is running fine and it is sending correct response
// 400 : Client side error
// 500 : Server side error