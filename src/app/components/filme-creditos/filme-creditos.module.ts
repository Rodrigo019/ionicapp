import { ModalFilmeCreditosPageModule } from './../modal-filme-creditos/modal-filme-creditos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeCreditosPageRoutingModule } from './filme-creditos-routing.module';

import { FilmeCreditosPage } from './filme-creditos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeCreditosPageRoutingModule,
    ModalFilmeCreditosPageModule
  ],
  exports: [FilmeCreditosPage],
  declarations: [FilmeCreditosPage]
})
export class FilmeCreditosPageModule {}
