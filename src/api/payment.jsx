export const processPayment = async (paymentDetails) => {
  const response = await fetch('https://backend-hotel-service-19daphi3z-elijahs-projects-e6652eea.vercel.app', {
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
