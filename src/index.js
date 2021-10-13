import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import reportWebVitals from './reportWebVitals';
import {Upgrade} from './components/Upgrade'

ReactDOM.render(
  <React.StrictMode>
    <Upgrade />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
