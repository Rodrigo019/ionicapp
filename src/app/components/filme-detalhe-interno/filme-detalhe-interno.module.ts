import { FilmeElencoPrincipalPageModule } from './../filme-elenco-principal/filme-elenco-principal.module';
import { FilmeCreditosPageModule } from './../filme-creditos/filme-creditos.module';
import { FilmeReviewsPageModule } from './../filme-reviews/filme-reviews.module';
import { FilmeOndeAssistirPageModule } from './../filme-onde-assistir/filme-onde-assistir.module';
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
    FilmeDetalheInternoPageRoutingModule,
    FilmeOndeAssistirPageModule,
    FilmeReviewsPageModule,
    FilmeCreditosPageModule,
    FilmeElencoPrincipalPageModule
  ],
  exports: [
    FilmeDetalheInternoPage
  ],
  declarations: [FilmeDetalheInternoPage]
})
export class FilmeDetalheInternoPageModule {}
