import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDdDjunNA8pZm9Q0GCkGQHhCUxCi_-pS_I",
  authDomain: "proyecto-react-espinosa.firebaseapp.com",
  projectId: "proyecto-react-espinosa",
  storageBucket: "proyecto-react-espinosa.appspot.com",
  messagingSenderId: "524962610483",
  appId: "1:524962610483:web:c904b37d914c8d3a0e9246"
};

const app = initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
