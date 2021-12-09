import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
