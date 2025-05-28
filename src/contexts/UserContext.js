// import React from 'react'
// const UserContext = React.createContext();

// const reducer = (state, action) => {
//     switch(action.type) {
//         case "ADD_MEMBER" :
//             return {
//                 users : [...state.users, action.payload]
//             }
//         case "LOGIN_USER" :
//             const isLogin = false;
//             if (state.users.filter(user => action.payload === user.email) !== null) isLogin = true;
//             return isLogin;
//         default :
//             return state
//     }
// }

// const UserProvider = () => {
//     state = {
//         users:[], 
//         dispatch : action => {
//             setState(state => reducer(state, action))
//         }
//     }
//   return (
//     <UserContext.Provider value = {state}> 
//         {props}
//     </UserContext.Provider> 
//   )
// }
// const UserConsumer = UserContext.Consumer;

// export default UserConsumer