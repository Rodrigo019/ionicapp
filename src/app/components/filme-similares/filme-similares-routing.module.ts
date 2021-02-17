import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeSimilaresPage } from './filme-similares.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeSimilaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeSimilaresPageRoutingModule {}
