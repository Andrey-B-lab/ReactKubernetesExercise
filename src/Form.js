import React, { useState } from 'react';

function Form({ onAdd }) {
    const [data, setData] = useState({ column1: '', column2: '' });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(data);
        setData({ column1: '', column2: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="column1"
                value={data.column1}
                onChange={handleChange}
                placeholder="Column 1"
                required
            />
            <input
                type="text"
                name="column2"
                value={data.column2}
                onChange={handleChange}
                placeholder="Column 2"
                required
            />
            <button type="submit">Add Data</button>
        </form>
    );
}

export default Form;
