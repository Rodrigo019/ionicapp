import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeListagemPageRoutingModule } from './filme-listagem-routing.module';

import { FilmeListagemPage } from './filme-listagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeListagemPageRoutingModule,
    LazyLoadImageModule
  ],
  exports: [
    FilmeListagemPage
  ],
  declarations: [FilmeListagemPage]
})
export class FilmeListagemPageModule {}
