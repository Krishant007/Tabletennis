import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglesPage } from './singles.page';

const routes: Routes = [
  {
    path: '',
    component: SinglesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglesPageRoutingModule {}
