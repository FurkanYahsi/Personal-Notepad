import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { App as AntdApp } from "antd";
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/reset.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AntdApp>  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AntdApp>
);

