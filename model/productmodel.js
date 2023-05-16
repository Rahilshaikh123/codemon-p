const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product name is required"],
        maxLength:20,
        minLength:3
    },
    description:{
        type:String,
        required:true,
        maxLength:100,
        minLength:[10,"desription is too short"]
    },
    price:{
        type:Number,
        required:[true,"price is needed"]
    }


},{timestamps:true})

module.exports=mongoose.model("Product",productSchema)