import { useAuthContext } from "./useAuthContext"
import { UseNoteContext } from "./UseNoteContext"

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const { dispatch: notesDispatch} = UseNoteContext()
    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type: 'LOGOUT'})
        notesDispatch({type: 'SET_NOTES', payload: null})
    }

    return {logout}
}