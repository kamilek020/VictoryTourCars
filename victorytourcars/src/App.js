import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CarDetail from './components/CarDetail';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <img src='./images/logo.png'/>
      </header>
      <div class="main-photo">

      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;