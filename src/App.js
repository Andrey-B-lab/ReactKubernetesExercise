import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ column1: '', column2: '' });

  // Fetch data from the Flask API on component mount
  useEffect(() => {
    fetch('/data')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(newItem => {
      setItems([...items, newItem]);  // Add the new item to the list
      setFormData({ column1: '', column2: '' });  // Reset the form fields
    });
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Entry Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="column1"
            value={formData.column1}
            onChange={handleChange}
            placeholder="Column 1"
            required
          />
          <input
            type="text"
            name="column2"
            value={formData.column2}
            onChange={handleChange}
            placeholder="Column 2"
            required
          />
          <button type="submit">Add Data</button>
        </form>

        <h2>Data List</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.column1} - {item.column2}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
