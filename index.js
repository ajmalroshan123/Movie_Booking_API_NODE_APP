const express = require("express");
const bodyParser = require("body-parser");
const env = require("dotenv");
const mongoose = require("mongoose");

env.config();
const app = express();

// configure body-parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/", (req, res)=> {

    return res.json(
        {Success : true,
         message : "Hello Aju"
        } 
    )
})

app.listen(process.env.PORT , ()=> {

    console.log(`Server Started at ${process.env.PORT}`)
    
    mongoose.connect(process.env.DB_URL, ()=> {
        console.log("Connected to mongo");
    },
    (err) => {
        console.log('Not able to connect monge', err);
    });
});