import React, { useState, useEffect } from 'react';

import { WarehouseItems } from './items.component';

export const WarehouseItemsPage = ({ warehouseService }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        warehouseService.items().then(setItems)
    }, [warehouseService]);

    return <WarehouseItems items={items} />;
};
