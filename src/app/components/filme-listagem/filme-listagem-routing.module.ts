import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeListagemPage } from './filme-listagem.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeListagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeListagemPageRoutingModule {}
