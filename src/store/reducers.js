import {
  SET_PARKINGS,
  SEARCH_CITY,
  BOOKING_PARKING,
  BOOKING_DATE_HOUR,
  TARGET_PARKING_POSITION,
  CREATE_PARKING,
  GET_ADMIN_DATA,
} from './types';

const initialState = {
  searchCity: '',
  parkingsFiltered: [],
  bookingInfo: {
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    value: 0,
  },
  targetPosition: {
    name: '',
    latitude: 0,
    longitude: 0,
  },
  newParking: {
    name: '',
    user: {},
    cityName: '',
    addres: '',
    phone: 0,
    position: {
      latitude: 0,
      longitude: 0,
    },
    openTime: '',
    closeTime: '',
    hourValue: 0,
    totalPlaces: 0,
    busyPlaces: 0,
    image: '',
  },
  adminRole: {},
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
          value: action.payload.valueBooking,
        },
      };
    case TARGET_PARKING_POSITION:
      return {
        ...state,
        targetPosition: {
          name: action.payload.name,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      };
    case CREATE_PARKING:
      return {
        ...state,
        newParking: action.payload,
      };
    case GET_ADMIN_DATA:
      return {
        ...state,
        adminRole: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
