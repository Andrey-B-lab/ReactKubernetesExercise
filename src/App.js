import React, { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/data') // Assuming Flask API is served on the same domain
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    const handleAdd = (item) => {
        fetch('/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
        .then(response => response.json())
        .then(newItem => {
            setItems([...items, newItem]);
        });
    };

    return (
        <div>
            <h1>Data Entry</h1>
            <Form onAdd={handleAdd} />
            <h2>Data List</h2>
            <List items={items} />
        </div>
    );
}

export default App;
