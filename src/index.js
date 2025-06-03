import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/reset.css';
import { NoteProvider } from './contexts/NoteContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NoteProvider>
      <App/>
    </NoteProvider>    
  </BrowserRouter>
);

