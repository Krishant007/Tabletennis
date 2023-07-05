import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditplayerPageRoutingModule } from './editplayer-routing.module';

import { EditplayerPage } from './editplayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditplayerPageRoutingModule
  ],
  declarations: [EditplayerPage]
})
export class EditplayerPageModule {}
