const express = require("express");
const bodyParser = require("body-parser");
const env = require("dotenv");
const mongoose = require("mongoose");
const Movie = require("./models/movie.model")

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


async function startServer() {
    try {
        // 1. Connect to DB
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to MongoDB");

        // 2. Start server AFTER DB connection
        app.listen(process.env.PORT, () => {
            console.log(`Server Started at ${process.env.PORT} `);
        });

        // // 3. Insert dummy data (optional)
        // await Movie.create({
        //     name: "Avatar",
        //     description: "A marine on an alien planet becomes torn between two worlds.",
        //     casts: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        //     trailerUrl: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
        //     language: "English",
        //     releaseDate: "2009-12-18",
        //     director: "James Cameron",
        //     releaseStatus: "RELEASED"
        // });

        // console.log("Dummy movie inserted !!");

    } catch (err) {
        console.log("Error starting server:", err);
    }
}

startServer();