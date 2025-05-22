import './App.css';
import {Routes, Route} from 'react-router-dom'
import LoginScreen from './pages/login-screen/LoginScreen';
import NotFoundScreen from './pages/not-found-page/NotFoundScreen';
import 'antd/dist/reset.css';
import SignUpScreen from './pages/sign-up-screen/SignUpScreen';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginScreen/>}></Route>  
        <Route path='/sign-up' element={<SignUpScreen/>}></Route>     
        <Route path='*' element={<NotFoundScreen/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
