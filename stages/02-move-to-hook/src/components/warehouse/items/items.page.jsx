import React, { useState, useEffect, Fragment } from 'react';

export const WarehouseItemsPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // some async
        Promise.resolve([
            { id: 1, name: 'car' },
            { id: 2, name: 'pencil' },
            { id: 3, name: 'phone' },
        ]).then(setItems)
    }, []);

    return (
        <Fragment>
            {items.map(({ id, item }) => (
                <div key={id}>item: {item}</div>
            ))}
        </Fragment>
    );
};
