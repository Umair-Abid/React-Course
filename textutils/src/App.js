import React, { useState } from "react";
import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ' #15292B';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (


    <Router>
      <div className="App">
        <Navbar title="TextUtils" aboutText='About Us' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">

          <Routes>
            <Route path="/about"
              element={<About mode={mode} />} />
            <Route path="/" element={
              <Form heading='Try TextUtils-Word Counter,Alphabets Converts,Summary' mode={mode} showAlert={showAlert} />} />
          </Routes>


        </div>
      </div>
    </Router>

  );
}

export default App;
