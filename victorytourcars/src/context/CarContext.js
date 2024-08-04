import React, { createContext, useState, useContext } from 'react';

const CarContext = createContext();

export function CarProvider({ children }) {
  const [cars, setCars] = useState([]);

  const addCar = (car) => {
    setCars(prevCars => [...prevCars, car]);
  };

  return (
    <CarContext.Provider value={{ cars, addCar }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCars() {
  return useContext(CarContext);
}