import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CarDetails from './components/CarDetail';
import AdminPanel from './components/AdminPanel';
import { CarProvider } from './context/CarContext';
import './App.css';

function App() {
  return (
    <CarProvider>
      <Router>
        <div className="app-container">
          <header className="navbar">
            <div className="logo">
              <h1>Nasza Grupa Motoryzacyjna</h1>
            </div>
          </header>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/car/:id" element={<CarDetails />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </main>
          <div className="background-image"></div>
        </div>
      </Router>
    </CarProvider>
  );
}

export default App;