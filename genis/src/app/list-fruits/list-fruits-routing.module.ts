import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFruitsPage } from './list-fruits.page';

const routes: Routes = [
  {
    path: '',
    component: ListFruitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListFruitsPageRoutingModule {}
