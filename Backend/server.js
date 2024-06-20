require('dotenv').config()

const express = require ('express')
const mongoose = require ("mongoose")
const noteRoutes = require ('./routes/noteRoutes')
const userRoutes = require ('./routes/User')

// express app
const app = express()

// middleware
app.use(express.json())

//routes
app.use('/api/notes',noteRoutes)
app.use('/api/user', userRoutes)

//CONNECT TO DB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 
