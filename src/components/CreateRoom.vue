// In your Vite app component (e.g., RoomList.vue, CreateRoom.vue)

import { ref } from 'vue';

const rooms = ref([]); 

// Fetch all rooms
async function fetchRooms() {
  const response = await fetch('./api/server'); // Replace with your actual API URL
  rooms.value = await response.json();
}

// Create a room
async function createRoom(name, description) {
  await fetch('./api/server', { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, description }) 
  });
  // Refresh room list or handle UI updates
  fetchRooms(); 
}
