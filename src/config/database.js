const mongoose = require("mongoose");

const connectDB = async() =>{
    await mongoose.connect(
        "mongodb+srv://priyamraj2001:w6O139oledYsT2Ne@namastenode.y50oe.mongodb.net/DevTinder"
    );
};

module.exports = connectDB;
// const {MongoClient} = require("mongodb");

// // Connection URL
// const url = 'mongodb+srv://priyamraj2001:w6O139oledYsT2Ne@namastenode.y50oe.mongodb.net/DevTinder';
// const client = new MongoClient(url);

// // Database Name
// const dbName = "HelloWorld";

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('user');
//   const data= {
//     firstname: "Deepak",
//     lastname: "Raut",
//     city: "Guwahati",
//     phoneNumber: "92373732732"
//   }

  
  
//   const findResult = await collection.find({}).toArray();
//    console.log('Found documents =>', findResult);
//   // the following code examples can be pasted here...
//   const count = await collection.find({"First Name" :"Deepika"}).toArray();
//   console.log("found object =>", count);
//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());


