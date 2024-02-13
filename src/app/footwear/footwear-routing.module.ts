import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootwearPage } from './footwear.page';

const routes: Routes = [
  {
    path: '',
    component: FootwearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootwearPageRoutingModule {}
