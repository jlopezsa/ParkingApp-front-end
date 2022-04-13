const initialState = {
  searchCity: '',
};

function reducer(action, state = initialState) {
  switch (action.type) {
    case 'SEARCH_CITY':
      return {
        ...state,
        searchCity: state.searchCity,
      };
    default:
      return state;
  }
}

export default reducer;
