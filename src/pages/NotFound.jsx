import { Link } from 'react-router-dom';
import '../style/NotFound.css'; // Import your custom CSS

const NotFound = () => {
  return (
    <div className="container not-found-page">
      <img 
        src="/assets/error-image.png" 
        alt="Page Not Found" 
        className="img-fluid" 
        onError={(e) => { e.target.src = '/assets/fallback-image.svg'; }} 
      />
      <h1 className="display-4">Oops! Page Not Found</h1>
      <p>Looks like the page you are searching for has checked out.</p>
      <div className="btn-group">
        <Link className="btn btn-primary" to="/">Back to Home</Link>
        <Link className="btn btn-secondary" to="/rooms">View Our Rooms</Link>
        <Link className="btn btn-info" to="/contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default NotFound;


