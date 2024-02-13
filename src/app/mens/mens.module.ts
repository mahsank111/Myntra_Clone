import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensPageRoutingModule } from './mens-routing.module';

import { MensPage } from './mens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensPageRoutingModule
  ],
  declarations: [MensPage]
})
export class MensPageModule {}
