// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //weather dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  }, 1500);
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  }
return (
  <>
    {/* <Navbar title = "textUtils" aboutT3ext = " About TextUtils" /> */}
    {/* <Navbar /> */}
    {/* <Router> */}
      <Navbar title = "textUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className='container my-3'>
      {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert = {showAlert} heading = 'Enter the text to analyse below' mode = {mode}/>} />
      </Routes> */}
      <TextForm showAlert = {showAlert} heading = 'Enter the text to analyse below' mode = {mode}/>
      <About />
      </div>
    {/* </Router> */}
  </>
);
}

export default App;
