import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeCreditosPage } from './filme-creditos.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeCreditosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeCreditosPageRoutingModule {}
