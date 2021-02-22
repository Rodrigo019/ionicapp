import { FilmeDetalhePage } from './../filme-detalhe/filme-detalhe.page';
import { FilmeDetalheInternoPage } from './../../components/filme-detalhe-interno/filme-detalhe-interno.page';
import { FilmeListagemPage } from './../../components/filme-listagem/filme-listagem.page';
import { FilmeFiltroPage } from './../filme-filtro/filme-filtro.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmePage } from './filme.page';

const routes: Routes = [
  {
    path: '',
    component: FilmePage
  },
  {
    path: 'filtro',
    component: FilmeFiltroPage
  },
  {
    path: 'detalhe/:id',
    component: FilmeDetalhePage
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmePageRoutingModule {}
