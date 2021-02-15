import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFilmeCreditosPage } from './modal-filme-creditos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFilmeCreditosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFilmeCreditosPageRoutingModule {}
