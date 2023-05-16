const errHandlerMiddleware=(err,req,res,next)=>{
    
    const errobject={
        message:err.message,
        StatusCodes:err.statusCode
    }
    if(err.name==="CastError"){
        errobject.message="Casterror invalid product id"
        errobject.StatusCodes=401
    }
    if(err.name==="ValidationError"){
        errobject.message="please enter valid detail"
        errobject.StatusCodes=401
    }
   res.status(errobject.StatusCodes).json({msg:errobject.message})
    //res.send(err)
}
module.exports=errHandlerMiddleware