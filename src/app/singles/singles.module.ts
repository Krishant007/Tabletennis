import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglesPageRoutingModule } from './singles-routing.module';

import { SinglesPage } from './singles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglesPageRoutingModule
  ],
  declarations: [SinglesPage]
})
export class SinglesPageModule {}
