import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const url = "http://localhost:7000";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/api/details/getData`);
        console.log("API response:", response.data);

        // Try both, see which one works
        // setData(response.data); 
        setData(response.data.data); // if data is inside another "data" field
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((itm) => (
          <div key={itm._id} className="data-card">
            <img src={itm.image} alt={itm.title} />
            <h3>{itm.title}</h3>
            <p>{itm.description}</p>
          </div>
        ))
      ) : (
        <p>No data found or still loading...</p>
      )}
    </div>
  );
  
}

export default Home;
