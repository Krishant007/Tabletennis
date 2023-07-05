import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PushnotiPage } from './pushnoti.page';

const routes: Routes = [
  {
    path: '',
    component: PushnotiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PushnotiPageRoutingModule {}
