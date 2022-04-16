import {
  SET_PARKINGS,
  SEARCH_CITY,
} from './types';

import {
  filteringParkingByCity, getAllParkings,
} from '../services/parkings';

export const setParkings = (parkings) => ({ type: SET_PARKINGS, payload: parkings });

export const listParkingsByCity = (city) => async (dispatch) => {
  try {
    const parkings = await filteringParkingByCity(city);
    dispatch(setParkings(parkings));
  } catch (error) {
    console.log('FLAG-A: listParkingsByCity');
  }
};

export const searchCity = (val) => ({
  type: SEARCH_CITY,
  payload: val,
  error: false,
  meta: {},
});

export const getParkings = () => async (dispatch) => {
  try {
    const parkings = await getAllParkings();
    dispatch(setParkings(parkings));
  } catch (error) {
    console.log('FLAG-A: getParkings');
  }
};

// export const getParkings = (parkings) => ({
//   type: GET_ALL_PARKINGS,
//   payload: val,
//   error: false,
//   meta: {},
// });
