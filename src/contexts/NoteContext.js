import { createContext, useReducer, useEffect } from 'react';

export const NoteContext = createContext();

const initialState = {
  notes: JSON.parse(localStorage.getItem('notes')) || []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    case "SET_NOTE":
      return {
        ...state,
        notes: action.payload
        
      };
    default:
      return state;
  }
};

export const NoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(state.notes));
  }, [state.notes]);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};
