import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPaymentProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentProcessing(false);
    } else {
      try {
        // Send paymentMethod.id to your server to handle the payment
        const response = await axios.post('/api/payment', {
          paymentMethodId: paymentMethod.id,
        });

        if (response.data.success) {
          setPaymentSuccess('Payment successful!');
          setPaymentError(null);
        } else {
          setPaymentError('Payment failed. Please try again.');
        }
      } catch (error) {
        setPaymentError('Payment failed. Please try again.');
      }

      setPaymentProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || paymentProcessing}>
        Pay Now
      </button>
      {paymentError && <div>{paymentError}</div>}
      {paymentSuccess && <div>{paymentSuccess}</div>}
    </form>
  );
};

export default PaymentForm;
