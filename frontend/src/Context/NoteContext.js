import { createContext, useReducer } from 'react';

export const NoteContext = createContext();

export const NoteReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NOTES':
      return { 
        notes: action.payload // Use 'notes'
      };
    case 'CREATE_NOTE':
      return { 
        notes: [action.payload, ...state.notes] // Use 'notes'
      };
    case 'DELETE_NOTE':
      return { 
        notes: state.notes.filter(n => n._id !== action.payload._id) // Use 'notes'
      };
    default:
      return state;
  }
};

export const NoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NoteReducer, { 
    notes: [] // Initialize with an array
  });

  return (
    <NoteContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};
