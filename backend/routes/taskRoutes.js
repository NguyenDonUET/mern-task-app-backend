const express = require('express')
const Task = require('../models/taskModal')
const router = express.Router()
const {
   createTask,
   getAllTask,
   getTask,
   deleteTask,
   updateTask
} = require('../controller/taskController')

// Create a task
router.post('/', createTask)

// Get all tasks
router.get('/', getAllTask)

// Get a single task(by id)
router.get('/:id', getTask)

// Delete a task
router.delete('/:id', deleteTask)

// Update a task
router.put('/:id', updateTask)

// router.route('/').get(getAllTask).post(createTask)
// router.route('/:id').get(getTask).put(updateTask).delete(deleteTask)

module.exports = router
