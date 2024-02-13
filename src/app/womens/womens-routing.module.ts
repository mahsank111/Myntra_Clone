import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WomensPage } from './womens.page';

const routes: Routes = [
  {
    path: '',
    component: WomensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WomensPageRoutingModule {}
