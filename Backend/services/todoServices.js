const Todo = require("../models/todoModels");

exports.addTodo = async (todo) => {
  try {
    let addTodo = await Todo.create(todo);
    if (addTodo === null) {
      return { code: 422, msg: "Unprocessable request" };
    } else {
      return { code: 201, msg: "Created", data: addTodo };
    }
  } catch (error) {
    return { code: 500, msg: "Internal Server Error", data: error };
  }
};

exports.getAllData=async()=>{
    try {
        let getAllData =await Todo.find({})
        if (getAllData === null) {
            return { code: 422, msg: "No data available" };
          } else {
            return { code: 200, msg: "OK", data: addTodo };
          }
    } catch (error) {
        
    }
}
