import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeDetalheInternoPageRoutingModule } from './filme-detalhe-interno-routing.module';

import { FilmeDetalheInternoPage } from './filme-detalhe-interno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeDetalheInternoPageRoutingModule
  ],
  exports: [
    FilmeDetalheInternoPage
  ],
  declarations: [FilmeDetalheInternoPage]
})
export class FilmeDetalheInternoPageModule {}
