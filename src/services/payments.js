const API_URL = process.env.REACT_APP_LOCAL_URL;

export async function createTokenCard(paymentMethod) {
  console.log(paymentMethod);
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IkpVTElBTiBsb3BleiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoianVsaWFuQHBhcmtpbmcuY29tIiwiaWF0IjoxNjUwNjY1NTc0LCJleHAiOjE2NTA2NzI3NzR9.PD1D6RZbX1HhhEKOF7bq0so98MReej-lrM1rGXU7VIg',
    },
    body: JSON.stringify({
      paymentMethod,
      amount: 10 * 100, // 10 US in cents
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
