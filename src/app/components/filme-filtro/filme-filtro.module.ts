import { ModalFiltroFilmePageModule } from './../modal-filtro-filme/modal-filtro-filme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FilmeFiltroPageRoutingModule } from './filme-filtro-routing.module';

import { FilmeFiltroPage } from './filme-filtro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeFiltroPageRoutingModule,
    ModalFiltroFilmePageModule
  ],
  exports: [
    FilmeFiltroPage
  ],
  declarations: [FilmeFiltroPage]
})
export class FilmeFiltroPageModule {}
