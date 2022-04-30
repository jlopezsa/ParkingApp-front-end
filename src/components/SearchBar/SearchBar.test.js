/* eslint-disable */
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import SearchBar from './SearchBar';
import { BrowserRouter } from 'react-router-dom';

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
};
const mockStore = configureStore();

describe('Hola mundo', () => {
  test('Render test and buttons', () => {
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      </Provider>
    )
    const buttonElement = screen.getByText(/Buscar/i);
    expect(buttonElement).toBeInTheDocument();
  });
})
