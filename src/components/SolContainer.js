import React, { useContext, useEffect } from 'react';
import Sol from './Sol';
import Loading from './Loading';
import '../App.css';

import WeatherContext from '../context/weatherContext';

const SolContainer = () => {
  const weatherContext = useContext(WeatherContext);

  useEffect(() => {
    weatherContext.getSols();
  }, []);

  const { sols, keys } = weatherContext;

  if (!keys) {
    return <Loading />;
  } else {
    return (
      <div style={solStyle}>
        {sols.map((sol) => (
          <Sol sol={sol.sol} min={sol.min} max={sol.max} />
        ))}
      </div>
    );
  }
};

const solStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default SolContainer;
