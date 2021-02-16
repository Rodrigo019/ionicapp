import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeElencoPrincipalPage } from './filme-elenco-principal.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeElencoPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeElencoPrincipalPageRoutingModule {}
