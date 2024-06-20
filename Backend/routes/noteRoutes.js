const express = require('express')
// const Note = require('../models/noteModels')
const {
  getNotes, 
  getNote, 
  createNote, 
  deleteNote, 
  updateNote
} = require('../controllers/noteControllers')

const Authent = require('../middlewares/Authent')

const router = express.Router()

// Require auth for all the routes
router.use(Authent)

// Get all notes
router.get('/', getNotes)

// Get a single note
router.get('/:id', getNote)

// Post a new note
router.post('/', createNote)

// Delete a note
router.delete('/:id', deleteNote)

// Update a note
router.patch('/:id', updateNote)

module.exports = router