import { useState } from 'react'
import { UseNoteContext } from '../Hooks/UseNoteContext'
import { useAuthContext } from "../Hooks/useAuthContext"

const NoteForm = () => {

  const { dispatch } = UseNoteContext()
  const { user } = useAuthContext()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
  }

    const note = {title, content}
    
    const response = await fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
  
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setTitle('')
      setContent('')
      console.log('New Notes Added:', json)

      dispatch({type: 'CREATE_NOTE', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Note</h3>

      <label>Note Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}

      />

      <label>Content:</label>
      <input 
        type="text" 
        onChange={(e) => setContent(e.target.value)} 
        value={content}
        className={emptyFields.includes('content') ? 'error' : ''}

      />

      <button>Add Notes</button>
      {error && <div className="error">{error}</div>}
    </form>
  )

}

export default NoteForm



// import { useState } from "react"
// import { useNotesContext } from "../hooks/useNotesContext"
// import { useAuthContext } from "../hooks/useAuthContext"

// const NoteForm = () => {
//     const {dispatch} = useNotesContext()
//     const {user} = useAuthContext()
//     const [title, setTitle] = useState('')
//     const [notes, setNotes] = useState('')
//     const [error, setError] = useState('')
//     const [emptyFields, setEmptyFields] = useState([])

    // const handleSubmit= async (e) => {
    //     e.preventDefault()

    //     if (!user) {
    //         setError('You must be logged in')
    //         return
    //     }

    //     const note = {title, notes}

        // const response = await fetch('/api/notes', {
        //     method: 'POST',
        //     body: JSON.stringify(note),
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${user.token}`
        //     }
    //     })
    //     const json = await response.json()

    //     if (!response.ok){
    //         setError(json.error)
    //         setEmptyFields(json.emptyFields || [])
    //     }
    //     if (response.ok) {
    //         setTitle('')
    //         setNotes('')
    //         setError(null)
    //         setEmptyFields([])
    //         console.log('New note Added', json)
    //         dispatch({type: 'CREATE_NOTE', payload:json})
    //     }
    // }

//     return(
//         <form className="create" onSubmit={handleSubmit}>
//             <h3>Add a new Note</h3>

//             <label><strong>Note Title:</strong></label>
//             <input 
//             type="text"
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//             className={emptyFields.includes('title')? 'error': ''}>
//             </input>

//             <label><strong>Note content:</strong></label>
//             <input 
//             type="text"
//             onChange={(e) => setNotes(e.target.value)}
//             value={notes}
//             className={emptyFields.includes('notes')? 'error': ''}>
//             </input>
//             <button>Add Note</button>
//             {error && <div className="error">{error}</div>}
//         </form>
//     )
// }

// export default NoteForm