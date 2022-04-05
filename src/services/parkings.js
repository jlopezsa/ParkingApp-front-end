/* eslint-disable */
const API_URL = 'http://localhost:8080/api';

export async function getAllParkings() {
  try {
    const response = await fetch(`${API_URL}/parkings`);
    const parkings = await response.json();
    return parkings;
  } catch (error) {
    console.log(error);
  }
}
export async function getOneParking(id) {
  try {
    const response = await fetch(`${API_URL}/parkings/${id}`);
    const parking = await response.json();
    return parking;
  } catch (error) {
    console.log(error);
  }
}
