import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapOrdersPageRoutingModule } from './map-orders-routing.module';

import { MapOrdersPage } from './map-orders.page';
import { MapComponent } from '../map/map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapOrdersPageRoutingModule
  ],
  declarations: [MapOrdersPage, MapComponent]
})
export class MapOrdersPageModule {}
