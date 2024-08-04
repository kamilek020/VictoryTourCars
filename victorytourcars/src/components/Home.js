import React from 'react';
import { useCars } from '../context/CarContext';

function Home() {
  const { cars } = useCars();

  return (
    <div className="home">
      <h1>Wszystkie Samochody</h1>
      <div className="car-grid">
        {cars.map(car => (
          <div key={car.id} className="car-card">
            <h2>{car.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;