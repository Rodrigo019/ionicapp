import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmePageRoutingModule } from './filme-routing.module';

import { FilmePage } from './filme.page';
import { FilmeListagemPageModule } from 'src/app/components/filme-listagem/filme-listagem.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmePageRoutingModule,
    FilmeListagemPageModule
  ],
  declarations: [FilmePage]
})
export class FilmePageModule {}
