
// import React from 'react'

// const NoteContext = React.createContext();

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "ADD_NOTE":
//             return {
//                 notes : [...state.notes, action.payload]
//             }
//         default:
//             return state;
//     }
// }

// const NoteProvider = (state) => {
//     state = {
//         notes:[], 
//         dispatch : action => {
//             setState(state => reducer(state, action))
//         }
//     }

//   return (
//     <NoteContext.Provider value={state}>
//         {props}
//     </NoteContext.Provider>
//   )
// }

// const NoteConsumer = NoteContext.Consumer;

// export default NoteConsumer;

