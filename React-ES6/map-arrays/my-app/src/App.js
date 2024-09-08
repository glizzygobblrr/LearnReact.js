import React from 'react';

// Guitar array
const guitars = [
  { id: 1, brand: 'Fender', model: 'Stratocaster', year: 2021, creator: 'Leo Fender' },
  { id: 2, brand: 'Gibson', model: 'Les Paul', year: 2020, creator: 'Orville Gibson' },
  { id: 3, brand: 'Ibanez', model: 'RG550', year: 2019, creator: 'Hoshino Gakki' },
  { id: 4, brand: 'PRS', model: 'Custom 24', year: 2022, creator: 'Paul Reed Smith' }
];

// Define the App component
const App = () => {
  // Map over the array to create a list of <p> elements
  const brands = guitars.map((guitar) => (
    <p key={guitar.id}>
      <strong>Brand:</strong> {guitar.brand} <br />
      <strong>Model:</strong> {guitar.model} <br />
      <strong>Year:</strong> {guitar.year} <br />
      <strong>Creator:</strong> {guitar.creator}
    </p>
  ));

  return (
    <div>
      {brands}
    </div>
  );
};

export default App;
