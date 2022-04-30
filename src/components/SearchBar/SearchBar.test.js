/* eslint-disable */
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";
import SearchBar from './SearchBar';
import { BrowserRouter } from 'react-router-dom';
import initialState from '../../store'

const mockStore = configureStore();
const store = mockStore(initialState);

describe('Hola mundo', () => {
  test('Render input field and button', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      </Provider>
    )
    const buttonElement = screen.getByText(/Buscar/i);
    expect(buttonElement).toBeInTheDocument();
    const inputElement = screen.getByTestId('input-test')
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });
})
