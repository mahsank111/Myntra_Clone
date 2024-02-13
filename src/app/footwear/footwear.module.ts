import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FootwearPageRoutingModule } from './footwear-routing.module';

import { FootwearPage } from './footwear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FootwearPageRoutingModule
  ],
  declarations: [FootwearPage]
})
export class FootwearPageModule {}
