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
  console.log('FLAG-01-----> into service', paymentMethod);

  try {
    const response = await fetch(`${API_URL}/api/payments`, payload);
    console.log('FLAG-02-----> into try');
    const tokenCard = await response.json();
    console.log('Succesfull token send to DB!');
    return tokenCard;
  } catch (error) {
    console.log('FLAG-03-----> into service with ERROR');
    return null;
  }
}
