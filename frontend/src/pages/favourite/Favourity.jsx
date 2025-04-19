import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Favourity.css';

function Favourity() {
  const url = "http://localhost:7000";
  const [favData, setFavData] = useState([]);
  const { userId } = useParams();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        setLoading(true);
        // Use the userId from params or fall back to the current user's ID
        const idToUse = userId || (user ? user._id : null);
        
        if (!idToUse) {
          setError("No user ID available. Please log in to view favorites.");
          setLoading(false);
          return;
        }
        
        const response = await axios.get(`${url}/api/favb/favbItem/${idToUse}`);
        
        if (response.data.success) {
          setFavData(response.data.favourites || []);
          setError(null);
        } else {
          setError(response.data.message || "Failed to load favorites");
        }
      } catch (err) {
        console.error("Failed to fetch favourites", err);
        setError("Failed to load favorites. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchFavourites();
  }, [userId, user]);

  if (loading) {
    return <div className="loading">Loading favorites...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (favData.length === 0) {
    return <div className="no-favorites">No favorites found. Add some items to your favorites!</div>;
  }

  return (
    <div className="favourites-container">
      <h2>Your Favorites</h2>
      <div className="card-container">
        {favData.map((item) => (
          <div key={item._id} className="card">
            <img src={`${url}/uploads/${item.image}`} alt={item.name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-description">{item.description}</p>
              <p className="card-category">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourity;
