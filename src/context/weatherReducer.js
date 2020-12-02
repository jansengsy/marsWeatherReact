import { GET_SOLS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SOLS:
      // Grab data and extract min and max temps
      const solArray = [];
      action.payload.sol_keys.forEach((key, index) => {
        let min, max;
        if (action.payload[key]['AT'] === undefined) {
          min = 'Unavailable';
          max = 'Unavailable';
        } else {
          min = action.payload[key]['AT']['mn'];
          max = action.payload[key]['AT']['mx'];
        }
        solArray[index] = { sol: key, min: min, max: max };
      });

      return {
        ...state,
        sols: solArray,
        keys: action.payload.sol_keys,
      };
    default:
      return state;
  }
};
