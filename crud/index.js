const express = require('express');
// import routes for Todo Api 
const todoRoutes = require('./routes/todo')

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;
 
// middleware to parse json request body 
app.use(express.json());

// mount the todo api routes
app.use('/api/v1',todoRoutes);
  
// server Start 
app.listen(PORT,()=>{
    console.log(`server is running Port no ${PORT}`)
})

// Connect to DataBase 
const dbConnect = require('./config/databasee');;
dbConnect();


