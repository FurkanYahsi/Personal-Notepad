import './App.css';
import {Routes, Route} from 'react-router-dom'
import LoginScreen from './pages/login-screen/LoginScreen';
import NotFoundScreen from './pages/not-found-page/NotFoundScreen';
import 'antd/dist/reset.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login-screen' element={<LoginScreen/>}></Route>        
        <Route path='*' element={<NotFoundScreen/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
