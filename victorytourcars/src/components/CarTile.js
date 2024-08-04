import React from 'react';
import { Link } from 'react-router-dom';

function CarTile({ car }) {
  return (
    <div className="car-tile">
      <Link to={`/car/${car.id}`}>
        <img src={car.image} alt={car.name} />
        <h2>{car.name}</h2>
      </Link>
    </div>
  );
}

export default CarTile;