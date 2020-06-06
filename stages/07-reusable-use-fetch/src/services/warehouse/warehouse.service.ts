import { Observable, from } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { WarehouseItem } from '../../models/warehouse/warehouse-item.model';

export interface WarehouseServiceInterface {
    items(): Observable<WarehouseItem[]>;
}

export class WarehouseService implements WarehouseServiceInterface {
    public items(): Observable<WarehouseItem[]> {
        // some async
        return from(Promise.resolve([
            { id: 1, name: 'car' },
            { id: 2, name: 'pencil' },
            { id: 3, name: 'phone' },
        ])).pipe(
            map(items => items.map(item => new WarehouseItem(item))),
            // fake delay to show useFetch loading state
            delay(1000)
        );
    }
}
