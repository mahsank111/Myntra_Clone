import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WomensPageRoutingModule } from './womens-routing.module';

import { WomensPage } from './womens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WomensPageRoutingModule
  ],
  declarations: [WomensPage]
})
export class WomensPageModule {}
