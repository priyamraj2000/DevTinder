const express = require("express");
const connectDB = require("./config/database");
const User = require("./model/user.js");
const app = express();

app.use(express.json());

app.post ("/signup",async(req,res)=>{
    
    const user= new User(req.body);
   try{
   await user.save();
   res.send("New User added")
   }
   catch(err){
    res.status(404).send("something went wrong");
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



