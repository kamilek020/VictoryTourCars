import React from 'react';
import { useCars } from '../context/CarContext';

function AdminPanel() {
  const { cars, addCar } = useCars();

  return (
    <div className="admin-panel">
      <h1>Panel Administracyjny</h1>
      <button onClick={() => addCar({ name: 'Nowy Samochód', id: cars.length + 1 })}>
        Dodaj Samochód
      </button>
      <ul>
        {cars.map(car => (
          <li key={car.id}>{car.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;