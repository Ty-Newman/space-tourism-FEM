import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Crew from "./components/crew/Crew";
import Destination from "./components/destination/Destination";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Routes>
        <Route path='/destination' element={<Destination />} />
      </Routes>
      <Routes>
        <Route path='/crew' element={<Crew />} />
      </Routes>
    </>
  );
}

export default App;
