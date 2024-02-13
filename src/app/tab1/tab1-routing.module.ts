import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'notification',
    loadChildren: () => import('../notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('../wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'mens',
    loadChildren: () => import('../mens/mens.module').then( m => m.MensPageModule)
  },
  {
    path: 'womens',
    loadChildren: () => import('../womens/womens.module').then( m => m.WomensPageModule)
  },
  {
    path: 'kids',
    loadChildren: () => import('../kids/kids.module').then( m => m.KidsPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
