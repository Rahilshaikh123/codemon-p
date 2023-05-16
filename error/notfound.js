const CustomError = require("./customerror");

class NotfoundError extends CustomError{
    constructor(message){
        super(message);
        this.statusCode=404;
    }
}
module.exports=NotfoundError