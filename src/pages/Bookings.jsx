import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import BookingForm from '../components/BookingForm';
import { createBooking, getRoomDetails } from '../services/api';
import Loader from '../components/Loader'; // Assuming you have a Loader component
import './Bookings.css';

const Bookings = ({ location }) => {
  const query = new URLSearchParams(location.search);
  const roomId = query.get('roomId');
  const [roomDetails, setRoomDetails] = useState(null);
  const [booking, setBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (roomId) {
      getRoomDetails(roomId)
        .then(setRoomDetails)
        .catch(error => console.error('Error fetching room details:', error))
        .finally(() => setIsLoading(false));
    }
  }, [roomId]);

  Bookings.propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string.isRequired 
    }).isRequired
  }

  const handleBooking = (formData) => {
    createBooking({ ...formData, roomId })
      .then(setBooking)
      .catch(error => console.error('Error creating booking:', error));
  };

  return (
    <div className="booking-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>Booking for {roomDetails?.name}</h1>
          {booking ? (
            <div className="alert alert-success">
              Booking successful! Your booking ID is {booking.id}.
            </div>
          ) : (
            <>
              <div className="room-details">
                {/* Display room details (image, description, price, etc.) */}
              </div>
              <BookingForm roomId={roomId} onSubmit={handleBooking} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Bookings;
