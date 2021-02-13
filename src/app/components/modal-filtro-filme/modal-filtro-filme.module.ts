import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFiltroFilmePageRoutingModule } from './modal-filtro-filme-routing.module';

import { ModalFiltroFilmePage } from './modal-filtro-filme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFiltroFilmePageRoutingModule
  ],
  declarations: [ModalFiltroFilmePage]
})
export class ModalFiltroFilmePageModule {}
