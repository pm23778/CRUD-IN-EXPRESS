// import  the model 
const Todo = require("../models/Todo")

// define route hendler 

exports.createTodo = async(req,res)=>{
    try{
        // extrect title and description from request body
         const {title,description}  =  req.body;
        //  create a new Todo Obj and insert in  database 
        const response = await Todo.create({title,description});
        // send a json response with a success flag 
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entey Successfully"
            }
        )

    }catch(err){
      console.err(err);
      console.log(err);
      res.status(500)
      .json({
        success:false,
        data:"internal server err",
        message:err.message
      })

    }
}

