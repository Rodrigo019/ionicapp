import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalOndeAssistirFilmePageRoutingModule } from './modal-onde-assistir-filme-routing.module';

import { ModalOndeAssistirFilmePage } from './modal-onde-assistir-filme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalOndeAssistirFilmePageRoutingModule
  ],
  exports: [ModalOndeAssistirFilmePage],
  declarations: [ModalOndeAssistirFilmePage]
})
export class ModalOndeAssistirFilmePageModule {}
