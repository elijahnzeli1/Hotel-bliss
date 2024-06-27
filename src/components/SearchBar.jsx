import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import RoomContext from '../context/RoomContext'; // Assuming you have a RoomContext

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { rooms } = useContext(RoomContext); // Get rooms from context

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredRooms = rooms.filter((room) =>
      room.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    navigate(`/rooms?search=${searchQuery}`, { state: { filteredRooms } }); // Navigate with filtered rooms
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        type="text"
        id="search"
        className="form-control me-2"
        placeholder="Search for rooms"
        aria-label="Search"
        value={searchQuery}
        onChange={handleChange}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
