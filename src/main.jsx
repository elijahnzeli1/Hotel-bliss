import React from 'react';
import ReactDOM from 'react-dom/client';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { RoomProvider } from './context/RoomContext';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RoomProvider>
          <Elements stripe={stripePromise}>
            <App />
          </Elements> 
        </RoomProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
