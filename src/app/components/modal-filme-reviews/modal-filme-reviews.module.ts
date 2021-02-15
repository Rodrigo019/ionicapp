import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFilmeReviewsPageRoutingModule } from './modal-filme-reviews-routing.module';

import { ModalFilmeReviewsPage } from './modal-filme-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFilmeReviewsPageRoutingModule
  ],
  exports: [ModalFilmeReviewsPage],
  declarations: [ModalFilmeReviewsPage]
})
export class ModalFilmeReviewsPageModule {}
