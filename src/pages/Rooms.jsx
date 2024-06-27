import { useEffect, useState } from 'react';
import RoomCard from '../components/RoomCard';
import { getRooms } from '../services/api';
import Loader from '../components/Loader';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRooms()
      .then(setRooms)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="row">
      {rooms.map(room => (
        <div className="col-md-4" key={room.id}>
          <RoomCard room={room} />
        </div>
      ))}
    </div>
  );
};

export default Rooms;
