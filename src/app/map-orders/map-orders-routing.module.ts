import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapOrdersPage } from './map-orders.page';

const routes: Routes = [
  {
    path: '',
    component: MapOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapOrdersPageRoutingModule {}
