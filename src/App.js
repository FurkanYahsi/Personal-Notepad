import './App.css';
import LoginScreen from './pages/login-screen/LoginScreen';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login-screen' element={<LoginScreen/>}></Route>
      </Routes>      
    </div>
  );
}

export default App;
