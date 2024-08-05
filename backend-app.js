require("dotenv").config();
require("./api/data/db")
const express= require("express");
const cors = require("cors");
const { json } = require("body-parser");
const { log } = require("console");
const routes = require("./api/routes");


// create app 
const app= express();
app.use(json());
app.use(cors());

app.use(function(req, res, next){
    log(req.method, req.url);
    next();
})

app.use("/api", routes)

const server= app.listen(process.env.PORT, function(){
    log(process.env.SERVER_START_MESSAGE, server.address().port);
})

