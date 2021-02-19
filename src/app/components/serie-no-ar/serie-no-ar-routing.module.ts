import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerieNoArPage } from './serie-no-ar.page';

const routes: Routes = [
  {
    path: '',
    component: SerieNoArPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerieNoArPageRoutingModule {}
