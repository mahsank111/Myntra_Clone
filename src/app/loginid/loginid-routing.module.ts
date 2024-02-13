import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginidPage } from './loginid.page';

const routes: Routes = [
  {
    path: '',
    component: LoginidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginidPageRoutingModule {}
