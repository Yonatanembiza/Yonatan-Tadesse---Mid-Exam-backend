const { log, error } = require("console");
const { MONGO_CLIENT_EVENTS } = require("mongodb");
const mongoose = require("mongoose");

require("dotenv").config();
require("./sales-model");

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.on("connected", function(){
    console.log("connected to ", process.env.DATABASE_NAME);
})

mongoose.connection.on("disconnected", function(){
    log("disconnected");
});
mongoose.connection.on("error", function(){
    log("mongoose connection erro", error)
})
process.on("SIGINT", function(){
    mongoose.connection.close(function(error){
        log((process.env.SIGINT_MESSAGE))
        process.exit(0);
    })
})
process.once("SIGUSR2", function(){
    mongoose.connection.close(function(){
        log(process.env.SIGUSR2_MESSAGE);
        process.kill(process.pid, "SIGUSR2");
    })
})
process.on("SIGTERM", function(){
    mongoose.connection.close(function(){
        log(process.env.SIGTERM_MESSAGE)
        process.exit(0);
    })
})