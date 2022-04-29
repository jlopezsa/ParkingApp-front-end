const API_URL = process.env.REACT_APP_LOCAL_URL;

export async function createTokenCard(paymentMethod, bookingInfo, token) {
  const valueBookingUS = (bookingInfo.value / 3962.33) * 100;
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      paymentMethod,
      amount: valueBookingUS.toFixed(0), // 10 US in cents
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
