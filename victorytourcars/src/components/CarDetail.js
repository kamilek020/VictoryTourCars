import React from 'react';
import { useParams } from 'react-router-dom';

const carDetails = {
  1: { name: 'Samochód A', images: ['/images/car-a.jpg'], description: 'Opis samochodu A', categories: { model: 'A', year: 2020, type: 'Sedan' }},
  2: { name: 'Samochód B', images: ['/images/car-b.jpg'], description: 'Opis samochodu B', categories: { model: 'B', year: 2021, type: 'SUV' }},
  // Dodaj więcej szczegółów
};

function CarDetail() {
  const { id } = useParams();
  const car = carDetails[id];

  if (!car) return <div>Samochód nie został znaleziony</div>;

  return (
    <div className="car-detail">
      <h1>{car.name}</h1>
      <img src={car.images[0]} alt={car.name} />
      <p>{car.description}</p>
      <table>
        <tbody>
          {Object.entries(car.categories).map(([key, value]) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarDetail;