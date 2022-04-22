const API_URL = process.env.REACT_APP_LOCAL_URL;

export async function createTokenCard(paymentMethod) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
