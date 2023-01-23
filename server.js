//RUN THE SERVER AND CHECK THE OUTPUT IN BROWSER
//http://localhost:9005/BILL
const express = require("express");
const path = require("path");

//express will give us all methods and servers to create API'S
const app = express();

//ADDING PUBLIC FOLDER TO RUN STATIC-FILES
//MIDDLEWARE :- conver any data intp JSON format
app.use(express.static("public"))

//THIS IS EXPRESS MIDDLEWARE
//THIS converts any data into STRING
app.use(express.json())


//GET API
app.get("/BILL", function(req,res){
    res.sendFile("/Bill-Calcy.html",{
        root: path.join(__dirname, "public")
    })
})

//SERVER CODE

app.listen(8002, function(){
    console.log("server is started with the port number 8000")
})