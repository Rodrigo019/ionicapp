import { SerieListagemPageModule } from './../../components/serie-listagem/serie-listagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeriePageRoutingModule } from './serie-routing.module';

import { SeriePage } from './serie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeriePageRoutingModule,
    SerieListagemPageModule
  ],
  declarations: [SeriePage]
})
export class SeriePageModule {}
