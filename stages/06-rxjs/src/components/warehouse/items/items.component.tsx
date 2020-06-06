import React, { Fragment, FC } from 'react';

import { WarehouseItem } from '../../../models/warehouse/warehouse-item.model';

export const WarehouseItems: FC<{ items: WarehouseItem[] }> = ({ items }) => (
    <Fragment>
        {items.map(({ id, name }) => (
            <div key={id}>item: {name}</div>
        ))}
    </Fragment>
);
