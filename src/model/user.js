const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
        minLength:3
    },
    lastName : {
        type: String
    },
    emailId : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address:" +  email);
            }
        }
        
    },
    password : {
        type: String
    },
    age : {
        type: Number,
        min:18
    },
    gender :{
        type: String
    },
    photoUrl : {
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISuukVSb_iHDfPAaDKboFWXZVloJW9XXiwGYFab-QwlAYQ3zFsx4fToY9ijcVNU5ieKk&usqp=CAU"
      
    },
    about :{
        type: String,
        default: "This is the default about for this user"
    },
    skills : {
        type: [String]
    }
},{
    timestamps: true,
});


module.exports = mongoose.model("User", userSchema);

