import { ListagemHorizontalPageModule } from './../components/listagem-horizontal/listagem-horizontal.module';
import { SerieNoArPageModule } from './../components/serie-no-ar/serie-no-ar.module';
import { FilmeBemAvaliadosPageModule } from './../components/filme-bem-avaliados/filme-bem-avaliados.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ListagemHorizontalPageModule
  ],
  exports: [FolderPage],
  declarations: [FolderPage]
})
export class FolderPageModule {}
