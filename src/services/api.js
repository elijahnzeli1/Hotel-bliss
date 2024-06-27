import axios from 'axios';

const API_URL = '../../../backend/server';

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