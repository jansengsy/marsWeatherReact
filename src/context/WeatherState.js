import React, { useReducer } from 'react';
import axios from 'axios';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';
import { GET_SOLS } from '../types';

const WeatherState = (props) => {
  const initialState = {
    sols: [],
    keys: null,
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const getSols = async () => {
    const res = await axios({
      url: `https://api.nasa.gov/insight_weather/?api_key=${process.env.REACT_APP_API_KEY}&feedtype=json&ver=1.0`,
      method: 'GET',
    });
    dispatch({
      type: GET_SOLS,
      payload: res.data,
    });
  };

  const sortSols = async () => {
    console.log(`Sols: ${state.sols}`);
  };

  const months = (i) => {
    const months = [
      'January',
      'Febuary',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[i];
  };

  return (
    <WeatherContext.Provider
      value={{
        sols: state.sols,
        keys: state.keys,
        getSols,
        sortSols,
        months,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
