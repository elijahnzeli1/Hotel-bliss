import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getRooms } from '../services/api';

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRooms().then((data) => {
      setRooms(data);
      setLoading(false);
    });
  }, []);

  RoomProvider.propTypes = {
    children: PropTypes.node.isRequired // Validate children prop
  };

  return (
    <RoomContext.Provider value={{ rooms, loading }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContext;
