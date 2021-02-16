import { FilmeCreditosPageModule } from './../filme-creditos/filme-creditos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeElencoPrincipalPageRoutingModule } from './filme-elenco-principal-routing.module';

import { FilmeElencoPrincipalPage } from './filme-elenco-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeElencoPrincipalPageRoutingModule,
    FilmeCreditosPageModule
  ],
  exports: [FilmeElencoPrincipalPage],
  declarations: [FilmeElencoPrincipalPage]
})
export class FilmeElencoPrincipalPageModule {}
