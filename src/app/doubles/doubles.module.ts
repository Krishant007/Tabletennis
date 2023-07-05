import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoublesPageRoutingModule } from './doubles-routing.module';

import { DoublesPage } from './doubles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoublesPageRoutingModule
  ],
  declarations: [DoublesPage]
})
export class DoublesPageModule {}
