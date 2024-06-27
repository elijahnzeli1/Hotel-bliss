export const processPayment = async (paymentDetails) => {
  const response = await fetch('../../../backend/server', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paymentDetails),
  });

  if (!response.ok) {
    throw new Error('Payment failed');
  }

  return response.json();
};
