import { WarehouseItem } from '../../models/warehouse/warehouse-item.model';

export interface WarehouseServiceInterface {
    items(): Promise<WarehouseItem[]>;
}

export class WarehouseService implements WarehouseServiceInterface {
    public items(): Promise<WarehouseItem[]> {
        // some async
        return Promise.resolve([
            { id: 1, name: 'car' },
            { id: 2, name: 'pencil' },
            { id: 3, name: 'phone' },
        ].map(item => new WarehouseItem(item)));
    }
}
