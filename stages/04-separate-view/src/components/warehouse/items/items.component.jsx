import React, { Fragment } from 'react';

export const WarehouseItems = ({ items }) => (
    <Fragment>
        {items.map(({ id, item }) => (
            <div key={id}>item: {item}</div>
        ))}
    </Fragment>
);
