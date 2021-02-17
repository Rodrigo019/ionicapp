import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeSimilaresPageRoutingModule } from './filme-similares-routing.module';

import { FilmeSimilaresPage } from './filme-similares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeSimilaresPageRoutingModule
  ],
  exports: [FilmeSimilaresPage],
  declarations: [FilmeSimilaresPage]
})
export class FilmeSimilaresPageModule {}
