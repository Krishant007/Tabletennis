import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttentionPage } from './attention.page';

const routes: Routes = [
  {
    path: '',
    component: AttentionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttentionPageRoutingModule {}
