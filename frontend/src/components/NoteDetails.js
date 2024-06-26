import { UseNoteContext } from './../Hooks/UseNoteContext';  
import { useAuthContext } from '../Hooks/useAuthContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

  
  const NoteDetails = ({ note }) => {
    const { dispatch } = UseNoteContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
      if (!user){
          return
      }
      const response = await fetch('/api/notes/' + note._id, {
          method: 'DELETE',
          headers: {
              'Authorization': `Bearer ${user.token}`
          }
      })
      const json = await response.json()

      if (response.ok) {
          dispatch({type: 'DELETE_NOTE', payload: json})
      }
  }

    return (
      <div className= "note-details">
        <h4>{note.title}</h4>
        <p><strong>content: </strong>{note.content}</p>
        <p>{formatDistanceToNow(new Date(note.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      </div>
    )
  }
  
  export default NoteDetails

  

//   import { useNotesContext } from './../hooks/useNotesContext';
// import { useAuthContext } from '../hooks/useAuthContext';

// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// const NoteDetails = ({note}) => {
//     const {dispatch} = useNotesContext()
//     const {user} = useAuthContext()

    // const handleClick = async () => {
    //     if (!user){
    //         return
    //     }
    //     const response = await fetch('/api/notes/' + note._id, {
    //         method: 'DELETE',
    //         headers: {
    //             'Authorization': `Bearer ${user.token}`
    //         }
    //     })
    //     const json = await response.json()

    //     if (response.ok) {
    //         dispatch({type: 'DELETE_NOTE', payload: json})
    //     }
    // }
//     return(
//         <div className="note-details">
//             <h4>{note.title}</h4>
//             <p><strong>Content: </strong>{note.notes}</p>
//             <p>{formatDistanceToNow(new Date(note.createdAt), {addSuffix: true})}</p>
//             <span className='material-symbols-outlined' onClick={handleClick}>Delete</span>
//         </div>
//     )
// }

// export default NoteDetails