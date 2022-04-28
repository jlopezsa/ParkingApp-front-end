import {
  SET_PARKINGS,
  SEARCH_CITY,
  BOOKING_PARKING,
  BOOKING_DATE_HOUR,
  TARGET_PARKING_POSITION,
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

export const bookingParking = (parking) => ({ type: BOOKING_PARKING, payload: parking });
export const bookingDateHour = (dateHour) => ({ type: BOOKING_DATE_HOUR, payload: dateHour });
export const targetParkingPosition = (targetPosition) => (
  {
    type: TARGET_PARKING_POSITION,
    payload: targetPosition,
  }
);
