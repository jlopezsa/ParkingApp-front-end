const API_URL = 'http://localhost:8080/api';

async function getSingleCities(id) {
  try {
    const response = await fetch(`${API_URL}/cities`);
    const data = await response.json();
    const singleCity = data.find((item) => item.city.cityName === id);
    return singleCity;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default {
  getSingleCities,
};
