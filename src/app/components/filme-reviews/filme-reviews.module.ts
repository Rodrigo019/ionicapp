import { ModalFilmeReviewsPageModule } from './../modal-filme-reviews/modal-filme-reviews.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeReviewsPageRoutingModule } from './filme-reviews-routing.module';

import { FilmeReviewsPage } from './filme-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeReviewsPageRoutingModule,
    ModalFilmeReviewsPageModule
  ],
  exports: [FilmeReviewsPage],
  declarations: [FilmeReviewsPage]
})
export class FilmeReviewsPageModule {}
