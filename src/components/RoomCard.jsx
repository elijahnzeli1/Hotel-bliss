import { Link } from 'react-router-dom'; // Use Link for navigation
import PropTypes from 'prop-types'; // Add prop validation

const RoomCard = ({ room }) => {
  return (
    <div className="card mb-4">
      <img src={room.imageUrl || 'placeholder_image_url'} className="card-img-top" alt={room.name} />
      <div className="card-body">
        <h5 className="card-title">{room.name}</h5>
        <p className="card-text">{room.description}</p>
        <div className="d-flex justify-content-between align-items-center"> {/* Add flexbox for alignment */}
          <p className="card-text mb-0">
            <strong>Price:</strong> ${room.price.toFixed(2)} / night {/* Format price to two decimal places */}
          </p>
          <Link 
            to={`/bookings?roomId=${room.id}`} 
            className="btn btn-primary"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

RoomCard.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string // Make imageUrl optional
  }).isRequired
};

export default RoomCard;

