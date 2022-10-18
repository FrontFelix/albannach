import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import NftPage from './pages/NftPage';



function App() {





  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NftPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
