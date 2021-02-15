import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeReviewsPage } from './filme-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeReviewsPageRoutingModule {}
