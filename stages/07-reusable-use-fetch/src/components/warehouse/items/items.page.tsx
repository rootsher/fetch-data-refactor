import React, { FC } from 'react';

import { WarehouseItems } from './items.component';

import { WarehouseItem } from '../../../models/warehouse/warehouse-item.model';

import { WarehouseService } from '../../../services/warehouse/warehouse.service';

import { useFetch } from '../../common/hooks/use-fetch';

export const WarehouseItemsPage: FC<{ warehouseService: WarehouseService }> = ({ warehouseService }): any => {
    const { loading, error, response: items } = useFetch<WarehouseItem[]>(
        warehouseService.items(),
        []
    );

    return loading ? 'loading...' : error ? JSON.stringify(error) : <WarehouseItems items={items} />;
};
