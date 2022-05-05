const API_URL = process.env.REACT_APP_URL;

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

export async function filteringParkingByCity(cityName) {
  try {
    const response = await fetch(`${API_URL}/api/parkings?cityName=${cityName}`);
    const parkings = await response.json();
    return parkings;
  } catch (error) {
    return null;
  }
}

export async function createParking(parking, token) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(parking),
  };
  try {
    const response = await fetch(`${API_URL}/api/parkings`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateParking(parking) {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(parking),
  };

  try {
    const response = await fetch(`${API_URL}/api/parkings/${parking.id}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteParking(parkingId) {
  const payload = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/api/parkings/${parkingId}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAllParkingsByAdmin() {
  const payload = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/api/parkings/byadmin`, payload);
    const parkings = await response.json();
    return parkings;
  } catch (error) {
    return null;
  }
}
