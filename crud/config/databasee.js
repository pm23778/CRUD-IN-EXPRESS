 const mongoose = require("mongoose");
 require('dotenv').config();

 const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Database Connected ");
    })
    .catch((err)=>{
        console.log('Not Connected');
        console.log(err.message);
        process.exit(1);
    })
 }
module.exports = dbConnect;