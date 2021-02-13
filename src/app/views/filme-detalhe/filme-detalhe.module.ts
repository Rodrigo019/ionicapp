import { FilmeDetalheInternoPageModule } from './../../components/filme-detalhe-interno/filme-detalhe-interno.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeDetalhePageRoutingModule } from './filme-detalhe-routing.module';

import { FilmeDetalhePage } from './filme-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeDetalhePageRoutingModule,
    FilmeDetalheInternoPageModule
  ],
  declarations: [FilmeDetalhePage]
})
export class FilmeDetalhePageModule {}
