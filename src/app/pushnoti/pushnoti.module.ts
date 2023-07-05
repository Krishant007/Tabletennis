import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PushnotiPageRoutingModule } from './pushnoti-routing.module';

import { PushnotiPage } from './pushnoti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PushnotiPageRoutingModule
  ],
  declarations: [PushnotiPage]
})
export class PushnotiPageModule {}
