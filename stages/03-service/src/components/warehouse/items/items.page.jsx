import React, { useState, useEffect, Fragment } from 'react';

export const WarehouseItemsPage = ({ warehouseService }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        warehouseService.items().then(setItems)
    }, [warehouseService]);

    return (
        <Fragment>
            {items.map(({ id, item }) => (
                <div key={id}>item: {item}</div>
            ))}
        </Fragment>
    );
};
