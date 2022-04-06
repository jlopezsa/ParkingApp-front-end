const API_URL = process.env.REACT_APP_BASE_URL;

export async function getAllParkings() {
  try {
    const response = await fetch(`${API_URL}/api/parkings`);
    const parkings = await response.json();
    return parkings;
  } catch (error) {
    return null;
  }
}
export async function getOneParking(id) {
  try {
    const response = await fetch(`${API_URL}/api/parkings/${id}`);
    const parking = await response.json();
    return parking;
  } catch (error) {
    return null;
  }
}
