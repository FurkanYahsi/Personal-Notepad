import './App.css';
import {Routes, Route} from 'react-router-dom'

import HomeScreen from './pages/home-screen/HomeScreen'
import LoginScreen from './pages/login-screen/LoginScreen';
import SignUpScreen from './pages/sign-up-screen/SignUpScreen';
import NotFoundScreen from './pages/not-found-page/NotFoundScreen';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/home/*' element={<HomeScreen/>}/>
        <Route path='/sign-up' element={<SignUpScreen/>}/>
        <Route path='*' element={<NotFoundScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
