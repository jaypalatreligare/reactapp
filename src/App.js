// src/App.js
import React, { useState, useEffect } from 'react';
import { BASE_URL } from "./config";
import axios from 'axios';


const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the Node.js API
   // console.log("apiBaseUrl-",BASE_URL);
   axios.get(`${BASE_URL}/users`)
      .then(response => {
        setUsers(response.data); // Assuming the API returns an array of users
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching datass');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li> // Adjust based on your user data structure
        ))}
      </ul>
    </div>
  );
};

export default App;
