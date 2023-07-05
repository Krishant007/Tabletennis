import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditplayerPage } from './editplayer.page';

const routes: Routes = [
  {
    path: '',
    component: EditplayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditplayerPageRoutingModule {}
