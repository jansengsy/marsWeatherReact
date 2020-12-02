import React from 'react';

const Sol = ({ sol, min, max }) => {
  console.log('In the sol component');
  return (
    <div>
      <h1>Sol {sol}</h1>
      <h2>{min}</h2>
      <h2>{max}</h2>
    </div>
  );
};

export default Sol;
