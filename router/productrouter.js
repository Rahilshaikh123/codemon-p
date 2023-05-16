const express=require("express")
const { createProduct, getAllProduct, getsingleProduct, updateProduct } = require("../controller/productcontroller")
const productrouter=express.Router()
productrouter.route("/").get(getAllProduct).post(createProduct)

productrouter.route("/:id").get(getsingleProduct).patch(updateProduct)


module.exports=productrouter