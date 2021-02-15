import { ModalOndeAssistirFilmePageModule } from './../modal-onde-assistir-filme/modal-onde-assistir-filme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeOndeAssistirPageRoutingModule } from './filme-onde-assistir-routing.module';

import { FilmeOndeAssistirPage } from './filme-onde-assistir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeOndeAssistirPageRoutingModule,
    ModalOndeAssistirFilmePageModule
  ],
  exports: [
    FilmeOndeAssistirPage
  ],
  declarations: [FilmeOndeAssistirPage]
})
export class FilmeOndeAssistirPageModule {}
