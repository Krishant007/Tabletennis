import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoublesPage } from './doubles.page';

const routes: Routes = [
  {
    path: '',
    component: DoublesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoublesPageRoutingModule {}
