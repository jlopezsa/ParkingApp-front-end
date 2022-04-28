const API_URL = process.env.REACT_APP_LOCAL_URL;

export async function createTokenCard(paymentMethod, infoBooking) {
  const valueBookingUS = (infoBooking.value / 3962.33) * 100;
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IkpVTElBTiBsb3BleiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoianVsaWFuQHBhcmtpbmcuY29tIiwiaWF0IjoxNjUxMTIyOTA3LCJleHAiOjE2NTExMzAxMDd9.LyyCpfgbyhX7e7JhhOei11LwVfwr92de_EuTd1Lo4aU',
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
