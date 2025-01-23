const validator = require("validator");

const validateSignUpData = (req)=>{
    const{firstName,lastName,emailId,password}= req.body;
    if(!firstName || !lastName){
        throw new Error("Enter the first name and last name");
    }
    else if(!validator.isEmail(emailId)){
        throw new Error("Email Id is not valid");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Password is not strong");
    }
}

module.exports={validateSignUpData}