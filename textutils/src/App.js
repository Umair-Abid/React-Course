import React from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
function App() {
  return (

    <>
    <div className="App">
      <Navbar title="TextUtils" aboutText='About Us'>  </Navbar>
      <div className="container">
      <Form heading='Enter the text below to analyse!'></Form>
      </div>
    </div></>
  );
}

export default App;
