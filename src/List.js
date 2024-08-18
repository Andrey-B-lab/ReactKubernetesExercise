import React from 'react';

function List({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item.column1} - {item.column2}
                </li>
            ))}
        </ul>
    );
}

export default List;
