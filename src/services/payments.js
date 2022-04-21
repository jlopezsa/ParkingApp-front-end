const API_URL = process.env.REACT_APP_BASE_URL;

export async function createTokenCard(payload) {
  console.log('FLAG-01-----> into service');
  try {
    const response = await fetch(`${API_URL}/api/payments`, payload);
    const tokenCard = await response.json();
    console.log('Response from server: ', tokenCard);
    return tokenCard;
  } catch (error) {
    console.log('FLAG-02-----> into service with ERROR');
    return null;
  }
}
