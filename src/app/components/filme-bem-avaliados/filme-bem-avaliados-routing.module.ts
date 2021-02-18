import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeBemAvaliadosPage } from './filme-bem-avaliados.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeBemAvaliadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeBemAvaliadosPageRoutingModule {}
