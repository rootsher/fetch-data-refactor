import React from 'react';
import ReactDOM from 'react-dom';

import { WarehouseItemsPage } from './components/warehouse/items/items.page';

import { WarehouseService } from './services/warehouse/warehouse.service';

const warehouseService = new WarehouseService();

ReactDOM.render(
  <React.StrictMode>
    <WarehouseItemsPage warehouseService={warehouseService} />
  </React.StrictMode>,
  document.getElementById('root')
);
