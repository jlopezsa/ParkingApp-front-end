import {
  SET_PARKINGS,
  SEARCH_CITY,
  BOOKING_PARKING,
  BOOKING_DATE_HOUR,
  TARGET_PARKING_POSITION,
  CREATE_PARKING,
  GET_ADMIN_DATA,
} from './types';

import {
  filteringParkingByCity,
  getAllParkings,
  createParking,
} from '../services/parkings';

export const setParkings = (parkings) => ({ type: SET_PARKINGS, payload: parkings });

export const searchCity = (city) => ({ type: SEARCH_CITY, payload: city, error: false });
export const addNewParking = (newParking) => ({ type: CREATE_PARKING, payload: newParking });

export const listParkingsByCity = (city) => async (dispatch) => {
  try {
    const parkings = await filteringParkingByCity(city);
    dispatch(setParkings(parkings));
  } catch (error) {
    throw new Error(error);
  }
};

export const getParkings = () => async (dispatch) => {
  try {
    const parkings = await getAllParkings();
    dispatch(setParkings(parkings));
  } catch (error) {
    throw new Error(error);
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

export const newParkingRegistered = (newParking, token) => async (dispatch) => {
  try {
    const response = await createParking(newParking, token);
    console.log('RESPONSE:  ', response);
    dispatch(addNewParking(newParking));
  } catch (error) {
    throw new Error(error);
  }
};

export const saveAdminData = (admin) => ({ type: GET_ADMIN_DATA, payload: admin });
