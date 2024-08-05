const mongoose = require("mongoose");
const { stringify } = require("querystring");
const { boolean } = require("webidl-conversions");
const tags= mongoose.Schema({
    0: String,
    1: String
})
const itemName = new mongoose.Schema({
    itemsName: String,
    tags: [tags],
    price: mongoose.Decimal128,
    quantity: Number
})
const customers= new mongoose.Schema({
    gender: String, 
    age: Number,
    email: String,
    satisfaction: Number
})

const saleSchema = new mongoose.Schema({
    salesDate: Date,
    items: [itemName],
    storeLocation: String,
    customer: customers,
    couponUsed: Boolean,
    purchasedMethod: String

});

mongoose.model("Sale", saleSchema, "sales")