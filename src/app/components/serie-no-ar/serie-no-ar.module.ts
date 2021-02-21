import { ListagemHorizontalPageModule } from './../listagem-horizontal/listagem-horizontal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SerieNoArPageRoutingModule } from './serie-no-ar-routing.module';
import { SerieNoArPage } from './serie-no-ar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerieNoArPageRoutingModule,
    ListagemHorizontalPageModule
  ],
  exports: [SerieNoArPage],
  declarations: [SerieNoArPage]
})
export class SerieNoArPageModule {}
