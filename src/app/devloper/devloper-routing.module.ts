import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevloperPage } from './devloper.page';

const routes: Routes = [
  {
    path: '',
    component: DevloperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevloperPageRoutingModule {}
