const API_URL = process.env.REACT_APP_LOCAL_URL;

export async function createTokenCard(paymentMethod) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IkpVTElBTiBsb3BleiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoianVsaWFuQHBhcmtpbmcuY29tIiwiaWF0IjoxNjUwOTEyNzE1LCJleHAiOjE2NTA5MTk5MTV9.G4o9zuch8gWm7W25UH0z-51dYOScJG_468FrwTkqLew',
    },
    body: JSON.stringify({
      paymentMethod,
      amount: 20 * 100, // 10 US in cents
    }),
  };
  try {
    const response = await fetch(`${API_URL}/api/payments`, payload);
    const tokenCard = await response.json();
    return tokenCard;
  } catch (error) {
    return null;
  }
}
