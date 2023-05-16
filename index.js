//Importing dependencies
require("express-async-errors")
require("dotenv").config()
const express=require("express");
const dbconnection = require("./db/dbconnect");
const productrouter=require("./router/productrouter");
const errHandlerMiddleware = require("./middleware/errorhandler");


const app =express();
const PORT=process.env.PORT||5000

app.use(express.json())
app.post("/",(req,res)=>{
    res.send("hii")
})
app.use("/api/v1/products",productrouter)
app.use(errHandlerMiddleware)


//creating server
const server=async()=>{
    try {
        // ensuring database is connected first 
        await dbconnection(process.env.MONGODB_URI);
        app.listen(PORT,()=>{
            console.log(`your server is started on PORT: ${PORT}`)
        })
        
    } catch (error) {
        console.log(error)
        
    }
}

server()
