import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFilmeReviewsPage } from './modal-filme-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFilmeReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFilmeReviewsPageRoutingModule {}
