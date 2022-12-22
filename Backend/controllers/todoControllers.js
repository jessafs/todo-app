const todoServices = require("../services/todoServices");

exports.addTodo = async (req, res) => {
  try {
    const todo = req.body;
    if (todo) {
      const addTodo = await todoServices.addTodo(todo);
      return res.json({ data: addTodo, msg: "success" });
    } else {
      return res.json({ msg: "error" });
    }
  } catch (error) {
    return res.json({ error: error });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const getAllTodo = await todoServices.getAllData();
    const {data, code, msg} =getAllTodo
    return res.json({data:data,code:code,msg:msg});
  } catch (error) {
    return res.json({error:error})
  }
};
exports.editTodo = async () => {
  try {
  } catch (error) {}
};
