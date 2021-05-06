const express = require("express");
const app = express();
const knexfile = require("./knexfile");
const knex = require("knex")(knexfile);
const port = 8000;

// add in parser for better body & error handling (for API's)
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ping test
app.get("/ping", 
async (req, res) => res.send("pong"));

// get data
app.get("/data", 
async (req, res) => {
    knex("data")
        .select("*")
        .then((rows) => {
            res.json(rows);
        })
        .catch((err) => {
            res.status(500).json({message: "Error getting data", error: err})
        });
});

// listen on the port
app.listen(port, () => console.log("Example app listening on port " + port));