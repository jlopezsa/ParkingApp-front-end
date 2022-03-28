/* eslint-disable */
const API_URL = 'http://localhost:8080/api';

export async function getSingleCities(id) {
  try {
    const response = await fetch(`${API_URL}/cities`);
    const data = await response.json();
    const singleCity = data.find((item)=>{
      return  item.id === id;
    })
    return singleCity;
  } catch (error) {
    console.log(error);
  }
}
