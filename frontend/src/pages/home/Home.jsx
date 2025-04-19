import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useAuth } from '../../context/AuthContext';
import "./Home.css";

function Home() {
  const url = "http://localhost:7000";
  const [data, setData] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${url}/api/details/getData`);
        setData(response.data.userDetails || []);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load items. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleFavorite = async (id) => {
    if (!user) {
      alert("Please login to add favorites");
      return;
    }

    try {
      const response = await axios.post(`${url}/api/favb/add`, {
        userId: user._id,
        itemId: id
      });
      
      if (response.data.success === "true") {
        // Update the item in local state to show it's favorited
        setData(prevData =>
          prevData.map(item =>
            item._id === id ? { ...item, favourite: true } : item
          )
        );
        alert("Added to favorites!");
      } else {
        alert(response.data.msg || "Failed to add to favorites");
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      alert("Failed to add to favorites. Please try again.");
    }
  };

  if (loading) {
    return <div className="loading">Loading items...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (data.length === 0) {
    return <div className="no-items">No items found.</div>;
  }

  return (
    <div className="card-container">
      {data.map((itm) => (
        <div key={itm._id} className="card">
          <div className="favorite-icon" onClick={() => toggleFavorite(itm._id)}>
            {itm.favourite ? (
              <AiFillHeart color="red" size={24} />
            ) : (
              <AiOutlineHeart size={24} />
            )}
          </div>
          <img src={`${url}/uploads/${itm.image}`} alt={itm.name} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{itm.name}</h3>
            <p className="card-description">{itm.description}</p>
            <p className="card-category">{itm.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
