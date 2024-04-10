const Todo = require("../models/Todo");


exports.getTodo = async(req,res)=>{
    try{
        const todos = await Todo.find({});
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"entey Successfully"
            }
        )
    }
    catch(err){
        console.log(err);
        res.status(500)
        .json({
          success:false,
          data:"internal server err",
          message:err.message
        })
    }
}

exports.getTodoById = async(req,res)=>{
    
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});
        if(!todo){
            return res.status(400).json({
                success:false,
                message:"No Data Found"
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fatched`
        })
        
    }
    catch(err){
        console.log(err); 
        res.status(500)
        .json({
          success:false,
          data:"internal server err",
          message:"Server Err"
        })
    }
}

exports.updateTodo = async(req,res)=>{
  try{
    const {id} = req.params
    const {title,description} = req.body;
    const todo = await Todo.findByIdAndUpdate(
        {_id:id},
        {title,description,updatedAt:Date.now()},
    )
    res.status(200).json({
        success:true,
        data:todo,
        message:`Update Successfully`
    })

  }
  catch(err){
    console.log(err); 
    res.status(500)
    .json({
      success:false,
      data:"internal server err",
      message:"Server Err"
    })
}
}

exports.deleteTodo = async(req,res)=>{
    try{
   const {id} = req.params;
     await Todo.findByIdAndDelete(id);
     res.status(200).json({
        success:true,
        message:'delete Successfully',

     })
    }
    catch(err){
console.log(err); 
    res.status(500)
    .json({
      success:false,
      data:"internal server err",
      message:"Server Err"
    })
    }
}