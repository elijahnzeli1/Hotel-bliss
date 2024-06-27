import axios from 'axios';

<<<<<<< HEAD
const API_URL = 'https://backend-hotel-service.vercel.app';
=======
const API_URL = 'https://backend-hotel-service-19daphi3z-elijahs-projects-e6652eea.vercel.app';
>>>>>>> origin/main

export const getRooms = async () => {
  try {
    const response = await axios.get(`${API_URL}/rooms`);
    if (response.status !== 200) { 
      throw new Error(`API Error: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching rooms:', error);
    throw error;
  }
};

export const getRoomDetails = async (roomId) => {
  try {
    const response = await axios.get(`${API_URL}/room/${roomId}`);
    if (response.status !== 200) {
      throw new Error(`API Error: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching room details:', error);
    throw error;
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await axios.post(`${API_URL}/booking`, bookingData);
    if (response.status !== 200) {
      throw new Error(`API Error: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};
