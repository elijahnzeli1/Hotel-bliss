export const processPayment = async (paymentDetails) => {
<<<<<<< HEAD
  const response = await fetch('https://backend-hotel-service.vercel.app', {
=======
  const response = await fetch('https://backend-hotel-service-19daphi3z-elijahs-projects-e6652eea.vercel.app', {
>>>>>>> origin/main
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
