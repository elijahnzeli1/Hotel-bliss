import { useState } from 'react';
import PropTypes from 'prop-types'; // Add prop validation
import { format } from 'date-fns'; // Add date-fns for date formatting
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ roomId, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomId,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (formData.checkIn >= formData.checkOut) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    onSubmit(formData);

     // Navigate to the payment page
     navigate('/payment');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="checkIn">Check-In Date</label>
        <input
          type="date"
          className="form-control"
          id="checkIn"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          min={format(new Date(), 'yyyy-MM-dd')} // Set min date to today
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="checkOut">Check-Out Date</label>
        <input
          type="date"
          className="form-control"
          id="checkOut"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          min={format(new Date(formData.checkIn), 'yyyy-MM-dd')} // Set min checkout to checkin date
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Book Now
      </button>
    </form>
  );
};

BookingForm.propTypes = {
  roomId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default BookingForm;
