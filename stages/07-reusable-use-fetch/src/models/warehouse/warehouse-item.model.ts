export class WarehouseItem {
    private _id?: number = undefined;
    private _name?: string = undefined;

    constructor({ id, name }: { id: number, name: string }) {
        this._id = id;
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }
}
