const express = require("express");
const connectDB = require("./config/database");
const User = require("./model/user.js");
const app = express();

app.post("/signup", async (req,res)=>{
    console.log(req.body);  
  //const user = new User({
//     firstName: "Sachin",
//     lastName: "Tendulkar",
//     emailId: "sachin@kohli.com",
//     password : "sachin@123",
//   });
//   try {
//     await user.save();
//     res.send("USer Added successfully!");
//   } catch(err){
//     res.status(400).send("Error saving the user:" + err.message);
//   }
});

// app.use(express.json());

// app.post("/signup", async (req,res) =>{
//   console.log(req.body);    
// });  


 app.listen(3001, console.log("listening"));

