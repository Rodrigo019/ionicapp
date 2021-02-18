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
    FilmeBemAvaliadosPageRoutingModule
  ],
  exports: [FilmeBemAvaliadosPage],
  declarations: [FilmeBemAvaliadosPage]
})
export class FilmeBemAvaliadosPageModule {}
