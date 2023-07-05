import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttentionPageRoutingModule } from './attention-routing.module';

import { AttentionPage } from './attention.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttentionPageRoutingModule
  ],
  declarations: [AttentionPage]
})
export class AttentionPageModule {}
