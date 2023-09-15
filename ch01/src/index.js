import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';
import Test7 from './Test7';
import Test8 from './Test8';
import Test9 from './Test9';

import reportWebVitals from './reportWebVitals';
//3. Test1 컴포넌트 추가
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Test4 />
    <Test5 age="41" addr="가산동" />
    <Test5 irum="이슬비" age="78" addr="작전동" />
    <Test5 irum="신예은" age="6" addr="신림동" />
    <Test6 irum="박진권" age="39" addr="가경동" />  
    <Test7 irum="김이호" age="25" addr="구로동" /> 
    <Test8 />  
    <Test9 /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
