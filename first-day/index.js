// creating a server - single API created.
// using this module we are going to create the server
// createServer takes a callback function which will be receiving two parameters request and response 
// request will contain the information coming from front end 
// response will contain the information which is required to be sent back to the front end

// const http = require("http");  //es5
// http.createServer(function(request, response){
// OR
// http.createServer((request, response)=>{

// response.write("Hello World!");

// closing a server
// response.end();
// }).listen(3001)  // We will be giving a port number to run our application on a specific port.


// const http = require("http");

// http.createServer((request, response)=>{
//     response.write("<h1>Hello World!</h1>");
//     response.end();
// }).listen(3001)


const http = require("http");

http.createServer((request, response)=>{ 
    const user = {name: "Rajveer", age:28}
    response.write("<h1>Hello World!</h1>");
    response.end(JSON.stringify(user));
}).listen(3001)



//node-http-module

// http module : 
// It is an inbuilt module in JS which helps you to create the server. and receive the information from the front end application and send some response to the front end application.

// ES6
// import httpModule from "httpModule";

// Different type of responses that you can share

// 1> text response 
// 2> json response
// 3> html response

//lambda function - Cloud (Other Topic)

//npm init  
//npm init --y  
//using two command - Only create package.json file

//TO RUN - node index.js
//On Browser - http://localhost:3001/