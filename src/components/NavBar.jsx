import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Assuming you have react-icons installed
import SearchBar from './SearchBar'; // Import your SearchBar component
import '../styles/NavBar.css';

const NavBar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img src="/assets/logo.png" alt="Hotel Booking" width="30" height="30" className="d-inline-block align-top" />
        Hotel Bliss
        </Link>
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            {/* Navigation Links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/rooms">Rooms</Link></li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link></li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link></li>
                      </ul>
                      
                      {/* Search Bar */}
                      <SearchBar />
                      
                      <div className="ml-auto dropdown">
                        <button className="btn btn-link dropdown-toggle" onClick={toggleUserMenu}>
                          <FaUserCircle size={24} />
                          </button>
                          <div className={`dropdown-menu dropdown-menu-right ${isUserMenuOpen ? 'show' : ''}`}>
                          <Link className="dropdown-item" to="/login">Login</Link>
                          <Link className="dropdown-item" to="/signup">Sign Up</Link>
                          <Link className="dropdown-item" to="/bookings">Bookings</Link>
                          <Link className="dropdown-item" to="/profile">Profile</Link>
                          <Link className="dropdown-item" to="/logout">Logout</Link>
                          </div>
                      </div>
           </div>
                      
      </div>
    </nav>
  );
};

export default NavBar;
