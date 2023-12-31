import React, { useState, useEffect } from 'react';
import Rank from '../../assets/gif/Ranking.gif';

const PORT = 8081;
const Ranking = () => {

  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    score: '',
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`http://localhost:${PORT}/api/data`)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error('Error fetching data:', error));
  };
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    fetch(`http://localhost:${PORT}/api/data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(() => {
        setFormData({ name: '', score: '' });
        fetchData();
      })
      .catch(error => console.error('Error adding data:', error));
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const selectedEntry = data.find((item) => item.id === id);
    setFormData(selectedEntry);
  };

  const handleUpdate = () => {
    fetch(`http://localhost:${PORT}/api/data/${editingId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(() => {
        setFormData({ name: '', score: '' });
        setEditingId(null);
        fetchData();
      })
      .catch(error => console.error('Error updating data:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:${PORT}/api/data/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchData();
      })
      .catch(error => console.error('Error deleting data:', error));
  };

  return (
    <div className="ranking-app">
      <img src={Rank} className="Ranking" alt="Rank" width="500" heigth="248"/>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Score"
        name="score"
        value={formData.score}
        onChange={handleInputChange}
      />
      {editingId ? (
        <button className="ranking-button" onClick={handleUpdate}>Update</button>
      ) : (
        <button className="ranking-button" onClick={handleAdd}>Add</button>
      )}
      {data.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Score: {item.score}</p>
          <button className="ranking-button" onClick={() => handleEdit(item.id)}>Edit</button>
          <button className="ranking-button" onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Ranking;