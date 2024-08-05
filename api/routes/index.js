const express = require("express");
const router = express.Router();
const salesController = require("../controllers/sales.controller");


//  find sales by storeLocation and customerEmail

router.route("/sales/:storeLocation/:customerEmail")
    .get(salesController.getAllSalesByStoreLocationAndEmail)
    
module.exports = router;