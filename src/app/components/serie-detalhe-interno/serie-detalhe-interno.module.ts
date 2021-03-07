import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SerieDetalheInternoPageRoutingModule } from './serie-detalhe-interno-routing.module';
import { SerieDetalheInternoPage } from './serie-detalhe-interno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SerieDetalheInternoPageRoutingModule
  ],
  exports: [SerieDetalheInternoPage],
  declarations: [SerieDetalheInternoPage]
})
export class SerieDetalheInternoPageModule {}
