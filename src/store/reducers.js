import {
  SET_PARKINGS,
  SEARCH_CITY,
} from './types';

const initialState = {
  searchCity: '',
  parkingsFiltered: [],
};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CITY:
      return {
        ...state,
        searchCity: action.payload,
      };
    case SET_PARKINGS:
      return {
        ...state,
        parkingsFiltered: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
