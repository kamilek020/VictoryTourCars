import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import carsData from './cars.json'; // Import pliku JSON z danymi o samochodach

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Ustawienie stanu na podstawie importowanych danych z carsData
    setCars(carsData);
  }, []);

  return (
    <div className="car-grid">
      {cars.map(car => (
        <div key={car.id} className="car-tile">
          <Link to={`/car/${car.id}`}>
            <img src={car.image} alt={car.name} />
            <h2>{car.name}</h2>
            <p>{car.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;