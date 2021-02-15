import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeOndeAssistirPage } from './filme-onde-assistir.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeOndeAssistirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeOndeAssistirPageRoutingModule {}
