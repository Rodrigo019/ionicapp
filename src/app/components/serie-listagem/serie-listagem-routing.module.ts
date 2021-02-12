import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerieListagemPage } from './serie-listagem.page';

const routes: Routes = [
  {
    path: '',
    component: SerieListagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerieListagemPageRoutingModule {}
