export class WarehouseService {
    items() {
        // some async
        return Promise.resolve([
            { id: 1, name: 'car' },
            { id: 2, name: 'pencil' },
            { id: 3, name: 'phone' },
        ]);
    }
}
