import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeFiltroPage } from './filme-filtro.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeFiltroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeFiltroPageRoutingModule {}
