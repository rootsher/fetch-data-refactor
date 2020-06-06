import React, { useState, useEffect, FC } from 'react';

import { WarehouseItems } from './items.component';

import { WarehouseItem } from '../../../models/warehouse/warehouse-item.model';

import { WarehouseService } from '../../../services/warehouse/warehouse.service';

export const WarehouseItemsPage: FC<{ warehouseService: WarehouseService }> = ({ warehouseService }) => {
    const [items, setItems] = useState<WarehouseItem[]>([]);

    useEffect(() => {
        warehouseService.items().subscribe(setItems)
    }, [warehouseService]);

    return <WarehouseItems items={items} />;
};
