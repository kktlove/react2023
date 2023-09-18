import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test6 from './Test6';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
//bootstrap 설치 : 
//yarn 으로 설치 : D:\kkt\react\ch03>yarn add react-bootstrap bootstrap
//npm 으로 설치 : D:\kkt\react\ch03>npm install react-bootstrap bootstrap
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Test6 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
