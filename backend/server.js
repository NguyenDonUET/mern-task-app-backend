const dotenv = require('dotenv').config()
const Task = require('./models/taskModal')
const taskRoutes = require('./routes/taskRoutes')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api/tasks', taskRoutes)

app.get('/', (req, res) => {
   res.send('Home page')
})

const PORT = process.env.PORT || 5000
mongoose
   .connect(process.env.MONGO_URL)
   .then(() => {
      app.listen(PORT, () => {
         console.log(`server is running on port ${PORT}`)
      })
   })
   .catch(err => {
      console.log(err)
   })
