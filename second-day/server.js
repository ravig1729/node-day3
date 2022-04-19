// creating server
//console.log("Hello 1");

// We will be creating the server using express framework.
// creating server
const express = require("express");   // in this we are importing express module
const server = express();             // in this we are creating server using express

const middleware1 = (req, res, next) =>{
    console.log("Hello this is middleware 1");
    next()  //block the flow & take it back to the requested route
}
const middleware2 = (req, res, next) =>{
    console.log("Hello this is middleware 2");
    next() 
}
// server.use(middleware1);
//server.use(middleware2);

server.get("/", middleware1, (req, res) =>{
    res.send("Hello World!")
    //res.send({name:"Chetan", id:23})
    //res.send("<h2>Hello</h2>")
})
server.get("/user", middleware2, (req, res) =>{
    res.send("Hello User!")
})

server.listen(3001, ()=>{
    console.log("Server is running at port 3001")
})




//5-4-2022
//Express.JS Framework

//Allow you to combine the child routes or all the routes to the default route.
//Ex.
//https://react-blog-app.com/bollywood
//react-router

// 1)npm init --y
// 2)npm install express
// 3)go to package.json under the "scripts" section write "start" : "nodemon server.js"
// 4)npm install nodemon
// 5)run npm start on terminal

//It will create package.json, after installing express it will create package-lock.json & node_modules

//On Package.json
//"start": "node server.js" ---------for simple run server to write this & run npm start
//"start": "nodemon server.js" ---------for continuous run server to write this & run npm start

//TO RUN - npm start

//On Browser - 
//http://localhost:3001/
//http://localhost:3001/user


//6-4-2022
//HTTP Methods - GET/READ POST PUT DELETE
//CRUD - Create Read Update/PUT Delete

//middlewares ::
//is a function,
//takes three parameter - req, res, next
//you can create multiple middlewares

//why middlewares ::
//hoc in react. middleware is a function which will be executed first before any route gets executed.

//HOC (comp)
//return