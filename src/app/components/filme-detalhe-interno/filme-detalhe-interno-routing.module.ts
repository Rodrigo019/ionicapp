import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeDetalheInternoPage } from './filme-detalhe-interno.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeDetalheInternoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeDetalheInternoPageRoutingModule {}
