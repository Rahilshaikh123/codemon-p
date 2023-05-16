const mongoose=require("mongoose");
const dbconnection=async (URI)=>{
    mongoose.connect(URI);
    console.log("successfully connected to database");

}
module.exports=dbconnection;