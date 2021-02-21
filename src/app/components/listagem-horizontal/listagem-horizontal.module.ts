import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListagemHorizontalPageRoutingModule } from './listagem-horizontal-routing.module';
import { ListagemHorizontalPage } from './listagem-horizontal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemHorizontalPageRoutingModule,
  ],
  exports: [
    ListagemHorizontalPage
  ],
  declarations: [ListagemHorizontalPage]
})
export class ListagemHorizontalPageModule {}
