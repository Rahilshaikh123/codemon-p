const CustomError = require("../error/index")
const Product=require("../model/productmodel")


const getsingleProduct=async(req,res)=>{
    
    const product =await Product.findById(req.params.id);
    if(!product){
        throw new CustomError.NotfoundError("Unable to find product")
    }
    res.status(200).json({msg:product})
}

const getAllProduct=async(req,res)=>{
    const product =await Product.find({});
    res.status(200).json({msg:product})
}

const updateProduct=async(req,res)=>{
    
    const product=await Product.findOne({_id:req.params.id});
    console.log(product)
    if(!product){
        throw new CustomError.NotfoundError("Unable to find product")
    }
    const price=req.body.price
    if(!price){
        throw new CustomError.BadrequestError("price is needed for product")
    }
    product.price=req.body.price
    product.save()
    res.status(201).json({msg:product})
}

// for creating products example
const createProduct= async(req,res,next)=>{
    const findproduct=await Product.findOne({name:req.body.name})
    console.log(findproduct)
    console.log(req.body.name)
     if(findproduct){
         throw new CustomError.BadrequestError("product already exists")
     }
     const createProduct=await Product.create(req.body)
     res.status(201).json({msg:createProduct})
 
 
 } 
module.exports={
    createProduct,
    getAllProduct,
    getsingleProduct,
    updateProduct
}
