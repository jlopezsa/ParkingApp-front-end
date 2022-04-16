import {
  SET_PARKINGS,
  SEARCH_CITY,
} from './types';

import {
  filteringParkingByCity, getAllParkings,
} from '../services/parkings';

export const setParkings = (parkings) => ({ type: SET_PARKINGS, payload: parkings });
export const searchCity = (city) => ({ type: SEARCH_CITY, payload: city, error: false });

export const listParkingsByCity = (city) => async (dispatch) => {
  try {
    const parkings = await filteringParkingByCity(city);
    dispatch(setParkings(parkings));
  // eslint-disable-next-line no-empty
  } catch (error) {
  }
};

export const getParkings = () => async (dispatch) => {
  try {
    const parkings = await getAllParkings();
    dispatch(setParkings(parkings));
  // eslint-disable-next-line no-empty
  } catch (error) {
  }
};
