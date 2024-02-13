import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginidPageRoutingModule } from './loginid-routing.module';

import { LoginidPage } from './loginid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginidPageRoutingModule
  ],
  declarations: [LoginidPage]
})
export class LoginidPageModule {}
