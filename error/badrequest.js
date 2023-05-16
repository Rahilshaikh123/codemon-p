const CustomError = require("./customerror");

class BadrequestError extends CustomError{
    constructor(message){
        super(message);
        this.statusCode=400;
    }
}
module.exports=BadrequestError