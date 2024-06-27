import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { RoomProvider } from './context/RoomContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Bookings from './pages/Bookings';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import BookingFormWithStripe from './components/BookingFormWithStripe';
import PaymentForm from './pages/PaymentForm';
import PropTypes from 'prop-types';

function App() {
  return (
    <AuthProvider>
      <RoomProvider>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/bookings"
              element={
                <RequireAuth>
                  <Bookings />
                </RequireAuth>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/book" element={<BookingFormWithStripe />} />
            <Route path="/payment" element={<PaymentForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </RoomProvider>
    </AuthProvider>
  );
}

function RequireAuth({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
