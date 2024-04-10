const express = require('express');
const route = express.Router();
// import controller 
const {createTodo} = require('../controllers/createTodo');
const {getTodo ,getTodoById,updateTodo,deleteTodo} = require('../controllers/getTodo');
 

// define Api routes 
route.post('/createTodo',createTodo);
route.get('/getAllData',getTodo);
route.get('/getTodos/:id',getTodoById);
route.put('/updateTodo/:id',updateTodo);
route.delete('/deleteTodo/:id',deleteTodo)




module.exports = route;
