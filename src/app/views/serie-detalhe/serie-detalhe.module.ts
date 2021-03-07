import { SerieDetalheInternoPageModule } from './../../components/serie-detalhe-interno/serie-detalhe-interno.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerieDetalhePageRoutingModule } from './serie-detalhe-routing.module';

import { SerieDetalhePage } from './serie-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerieDetalhePageRoutingModule,
    SerieDetalheInternoPageModule
  ],
  declarations: [SerieDetalhePage]
})
export class SerieDetalhePageModule {}
