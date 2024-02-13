import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'mens',
    loadChildren: () => import('./mens/mens.module').then( m => m.MensPageModule)
  },
  {
    path: 'womens',
    loadChildren: () => import('./womens/womens.module').then( m => m.WomensPageModule)
  },
  {
    path: 'kids',
    loadChildren: () => import('./kids/kids.module').then( m => m.KidsPageModule)
  },
  {
    path: 'footwear',
    loadChildren: () => import('./footwear/footwear.module').then( m => m.FootwearPageModule)
  },
  {
    path: 'accessories',
    loadChildren: () => import('./accessories/accessories.module').then( m => m.AccessoriesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'loginid',
    loadChildren: () => import('./loginid/loginid.module').then( m => m.LoginidPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
