const express = require("express");
const app = express();
var port = 8080;

// app.get: Handling Requests/ Responses
app.get("/",function(req,res){
    res.send("Welcome to Mkweb Project");
});

app.get("/about", function(req,res){
    res.send("I am a software Engineer.");
});
app.get("/contact", function(req,res){
    res.send("Contact me @ contact@mohamedkadi.com");
})

// app.listen: Port  + Server log details
app.listen(port, function(req,res){
    console.log("Server listening in port: "+ port);
});