const initialState = {
  searchCity: '',
};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_CITY':
      return {
        ...state,
        searchCity: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
