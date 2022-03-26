/* eslint-disable */
const API_URL = 'http://localhost:8080/api';

export async function getSingleCities() {
  try {
    const response = await fetch(`${API_URL}/cities`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
