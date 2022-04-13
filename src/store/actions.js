const searchCity = (val) => ({
  type: 'SEARCH_CITY',
  payload: val,
  error: false,
  meta: {},
});

export default searchCity;
