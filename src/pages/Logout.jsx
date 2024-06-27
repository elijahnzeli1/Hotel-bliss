import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate here
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate(); // Use useNavigate within Profile component

  if (!user) {
    return <p>Please log in</p>; 
  }

  const handleLogout = async () => {
    try {
      await logout(); 
      navigate('/login');
    } catch (error) {
      // Handle logout errors here
      console.error('Logout failed:', error);
    }
  };


  return (
    <div>
      <h1>Welcome, {user.name}</h1> {/* Corrected property name */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
