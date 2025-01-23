const express = require("express");
const connectDB = require("./config/database");
const User = require("./model/user.js");
const user = require("./model/user.js");
const app = express();
const {validateSignUpData} = require("./utils/validation.js");
const bcrypt = require("bcrypt");
const validator = require("validator");

app.use(express.json());

app.post("/login", async(req,res)=>{
   
    try {
        const {emailId, password}= req.body;
        if(!validator.isEmail(emailId)){
            throw new Error("Email Id is not correct");
        }
        if(!validator.isStrongPassword(password)){
            throw new Error("Password is not strong");
        }

        const user= await User.findOne({emailId:emailId});
        if(!user){
            throw new Error("Email not found in DB");
        }
        const ispasswordvalid = await bcrypt.compare(password, user.password);
        if(ispasswordvalid){
            res.send("Login Successful!!!")
           
        }else{
            throw new Error("Password is not valid");
        }
    } catch (err) {
        res.status(404).send("Error saving the user : " + err.message);
    }
})

app.post ("/signup",async(req,res)=>{


    
   
   try{

    //validate the signup data
   validateSignUpData(req);
   const{firstName, lastName, emailId,password} = req.body;
   const hashpassword = await bcrypt.hash(password,10 );
   console.log(hashpassword);

   const user= new User({
    firstName,lastName, emailId, password:hashpassword
   });
   await user.save();
   res.send("New User added")
   }
   catch(err){
    res.status(404).send("Error saving the user" + err.message);
   }

});

app.get("/user",async(req,res)=>{
     const Useremail= req.body.emailId;
     try {
       const data= await User.find({emailId: Useremail});
       res.send(data);
     } catch (error) {
        res.status(404).send("Something went wrong");
     }
})

app.get("/feed",async(req,res)=>{
    try {
        const data= await User.findById("6709478e7ab80ffecc197e4a");
        res.send(data);
    } catch (error) {
        console.log("Something went wrong");
    }
})

app.patch("/user/:emailId",async(req,res)=>{
   const email= req.params?.emailId;
   const data= req.body;
   try {
    const ALLOWED_UPDATES = [
        "age",
        "photoUrl",
        "age",
        "gender",
        "skills",
        "lastName",
        "firstName"
    ];
    const isAllowed= Object.keys(data).every((k)=>
        ALLOWED_UPDATES.includes(k)
    );
    if(!isAllowed){
        throw new Error("Update not allowed");
    }
    if(data?.skills?.length > 10){
        throw new Error("Skills cannot be more than 10");
    }

    

   const user= await User.findOneAndUpdate({emailId:email},data);
   console.log(user);
    res.send("user updated successfully!");
   } catch (error) {
    res.send("Something went wrong" + error.message);
   }
})

app.delete("/user", async(req,res)=>{
    const id= req.body._id;
    try {
        const count= await User.deleteOne({_id:id});
       res.send(count);
    } catch (error) {
       res.send("something went wrong");
    }
    
})

connectDB()
    .then(()=>{
    console.log("Database connection Establised");
    app.listen(7777,()=>{
        console.log("Server is successfully listening on port 7777..")
    });
    })
    .catch((err)=>{
        console.log("Database cannot be connected");
    });


// app.post("/signup", async (req,res)=>{
//     console.log(req.body);  
//   //const user = new User({
// //     firstName: "Sachin",
// //     lastName: "Tendulkar",
// //     emailId: "sachin@kohli.com",
// //     password : "sachin@123",
// //   });
// //   try {
// //     await user.save();
// //     res.send("USer Added successfully!");
// //   } catch(err){
// //     res.status(400).send("Error saving the user:" + err.message);
// //   }
// });

// // app.use(express.json());

// // app.post("/signup", async (req,res) =>{
// //   console.log(req.body);    
// // });  

// app.get("/user",(req,res,next)=>{
//     console.log("First route");
//     next();
// },
//  (req,res,next)=>{
//     console.log("seconf route");
//     next();
//  },
//  (req,res)=>{
//     console.log("Third route");
    
    
//  }
// )

// // app.get("/user",(req,res)=>{
// //     res.send({firstName:"Priyam", secondName:"Raj"});
// // });

// app.post("/user", (req,res)=>{
//     res.send("post call connected");
// })


//  app.listen(3001, console.log("listening"));



