require("dotenv").config();
const { log } = require("console");
const mongoose= require("mongoose");

const Sale= mongoose.model(process.env.SALES_MODEL);
const response = {
    status: 200,
    data: {}
}
const getAllSalesByStoreLocationAndEmail= function(req, res){
    log("here")
    const storeLocation= req.params.storeLocation;
    const customerEmail= req.params.customerEmail;
    const offset = parseInt(process.env.DEFAULT_FIND_OFFSET);
    const count = parseInt(process.env.DEFAULT_FIND_COUNT);
    log(storeLocation, customerEmail, offset, count)
    //  find sales by storeLocation and customerEmail
   
    Sale.find({     
        storeLocation: storeLocation,
        'customer.email': customerEmail})
    .skip(offset)
    .limit(count)
    .exec(function(err, sales){
        if(err){
            log("error", err)
            response.status= 500;
            response.data= {message: err}
            return res.status(response.status).json(response.data);
        }
        response.status= 200;
        response.data= sales;
        log(sales)
        return res.status(200).json(response);
    });
};


module.exports = {
    getAllSalesByStoreLocationAndEmail: getAllSalesByStoreLocationAndEmail
}