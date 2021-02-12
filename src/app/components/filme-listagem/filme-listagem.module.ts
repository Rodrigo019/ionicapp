import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeListagemPageRoutingModule } from './filme-listagem-routing.module';

import { FilmeListagemPage } from './filme-listagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeListagemPageRoutingModule
  ],
  exports: [
    FilmeListagemPage
  ],
  declarations: [FilmeListagemPage]
})
export class FilmeListagemPageModule {}
