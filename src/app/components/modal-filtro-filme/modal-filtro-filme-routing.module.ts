import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFiltroFilmePage } from './modal-filtro-filme.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFiltroFilmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFiltroFilmePageRoutingModule {}
