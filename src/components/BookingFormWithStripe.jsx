import { Elements } from '@stripe/react-stripe-js';
import BookingForm from './BookingForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PTjIp2K0f18Rrh0ea8Bv5q6alsaMiw5Cm90z4qJrbfz4CESmB2eVNZKYVUNJHYglGNGgIeUmu3dxN519VCBDjgk00GVd0cWNK');

const BookingFormWithStripe = (props) => (
  <Elements stripe={stripePromise}>
    <BookingForm {...props} />
  </Elements>
);

export default BookingFormWithStripe;
