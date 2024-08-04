import React from 'react';
import { useCars } from '../context/CarContext';

function AdminPanel() {
  const { cars, addCar } = useCars();

  const handleAddCar = () => {
    const newCar = { name: `Nowy Samochód ${cars.length + 1}`, id: cars.length + 1 };
    addCar(newCar);
  };

  return (
    <div className="admin-panel">
      <h1>Panel Administracyjny</h1>
      <button onClick={handleAddCar}>
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