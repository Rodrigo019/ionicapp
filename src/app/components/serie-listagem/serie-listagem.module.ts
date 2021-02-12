import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerieListagemPageRoutingModule } from './serie-listagem-routing.module';

import { SerieListagemPage } from './serie-listagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerieListagemPageRoutingModule
  ],
  declarations: [SerieListagemPage]
})
export class SerieListagemPageModule {}
