import { Link } from 'react-router-dom'; // If you want to add links
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Assuming you have react-icons installed
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start">
      <div className="container p-4">
        {/* Grid row */}
        <div className="row">
          {/* Grid column: About Us */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Hotel Bliss is a luxury hotel chain committed to providing exceptional experiences to our guests. We offer a variety of amenities and services to make your stay unforgettable.
            </p>
          </div>

          {/* Grid column: Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/rooms" className="text-white">Rooms</Link></li>
              <li><Link to="/about" className="text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Grid column: Social Media */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Follow Us</h5>
        <div className="social-icons">
          <a href="https://www.facebook.com/@srpnthuku" target="_blank" rel="noopener noreferrer" className="text-white me-4">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/@NzeliElijah" target="_blank" rel="noopener noreferrer" className="text-white me-4">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/@NzeliElijah" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaInstagram />
          </a>
        </div>
      </div>
      </div>

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Hotel Booking. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
