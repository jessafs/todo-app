const express = require('express')
const router = express.Router()
const todoControllers = require('../controllers/todoControllers')

router.post('/addTodo', todoControllers.addTodo)
router.get('/getAllTodo',todoControllers.getAllTodo)

module.exports = router;