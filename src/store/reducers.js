import {
  SET_PARKINGS,
  SEARCH_CITY,
  BOOKING_PARKING,
  BOOKING_DATE_HOUR,
} from './types';

const initialState = {
  searchCity: '',
  parkingsFiltered: [],
  bookingInfo: {
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
  },
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
    case BOOKING_PARKING:
      return {
        ...state,
        bookingParking: action.payload,
      };
    case BOOKING_DATE_HOUR:
      return {
        ...state,
        bookingInfo: {
          startDate: action.payload.startDate,
          endDate: action.payload.endDate,
          startTime: action.payload.startTime,
          endTime: action.payload.endTime,
        },
      };
    default:
      return state;
  }
}

export default reducer;
