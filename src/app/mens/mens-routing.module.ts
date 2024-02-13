import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensPage } from './mens.page';

const routes: Routes = [
  {
    path: '',
    component: MensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensPageRoutingModule {}
