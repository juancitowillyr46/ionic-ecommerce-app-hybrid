import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'assigned-orders',
    loadChildren: () => import('./assigned-orders/assigned-orders.module').then( m => m.AssignedOrdersPageModule)
  },
  {
    path: 'map-orders',
    loadChildren: () => import('./map-orders/map-orders.module').then( m => m.MapOrdersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
