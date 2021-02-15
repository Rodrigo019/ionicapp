import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalOndeAssistirFilmePage } from './modal-onde-assistir-filme.page';

const routes: Routes = [
  {
    path: '',
    component: ModalOndeAssistirFilmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalOndeAssistirFilmePageRoutingModule {}
