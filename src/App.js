
import { BrowserRouter as Router,Route, Routes }
    from 'react-router-dom';
import './App.css';
import React,{useState,useEffect} from 'react';

import CustomIframe from './CustomIframe';
import MyComponent from './MyComponent';
function App() {
  return (
    <div className='App'>
        <h1>Iframest</h1>
        <CustomIframe >
           <MyComponent />
        </CustomIframe>
    </div>
  );
 
}

export default App;
