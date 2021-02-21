import { ListagemHorizontalPageModule } from './../listagem-horizontal/listagem-horizontal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeBemAvaliadosPageRoutingModule } from './filme-bem-avaliados-routing.module';

import { FilmeBemAvaliadosPage } from './filme-bem-avaliados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeBemAvaliadosPageRoutingModule,
    ListagemHorizontalPageModule
  ],
  exports: [FilmeBemAvaliadosPage],
  declarations: [FilmeBemAvaliadosPage]
})
export class FilmeBemAvaliadosPageModule {}
