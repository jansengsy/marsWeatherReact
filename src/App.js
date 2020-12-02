import React from 'react';
import './App.css';
import WeatherState from './context/WeatherState';
import Banner from './components/Banner';
import SolContainer from './components/SolContainer';

function App() {
  return (
    <WeatherState>
      <div className='App'>
        <Banner />
        <SolContainer />
      </div>
    </WeatherState>
  );
}

export default App;
