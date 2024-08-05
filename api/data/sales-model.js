const mongoose = require("mongoose");
const { stringify } = require("querystring");
const { boolean } = require("webidl-conversions");
const tags= mongoose.Schema({
    0: String,
    1: String
})
const itemName = mongoose.Schema({
    itemaName: String,
    tags: [tags],
    price: mongoose.Decimal128,
    quantity: Number
})
const customers= mongoose.Schema({
    gender: String, 
    age: Number,
    email: String,
    satisfaction: Number
})

const saleSchema = mongoose.Schema({
    salesDate: Date,
    items: [itemName],
    storeLocation: String,
    customer: customers,
    couponUsed: boolean,
    purchasedMethod: String

});

mongoose.model("Sale", saleSchema, "sales")