import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFilmeCreditosPageRoutingModule } from './modal-filme-creditos-routing.module';

import { ModalFilmeCreditosPage } from './modal-filme-creditos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFilmeCreditosPageRoutingModule
  ],
  exports: [ModalFilmeCreditosPage],
  declarations: [ModalFilmeCreditosPage]
})
export class ModalFilmeCreditosPageModule {}
