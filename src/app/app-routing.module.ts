import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'filmes',
    loadChildren: () => import('./views/filmes/filme.module').then( m => m.FilmePageModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./views/series/serie.module').then( m => m.SeriePageModule)
  },
  {
    path: 'filmes/filme-detalhe/:id',
    loadChildren: () => import('./views/filme-detalhe/filme-detalhe.module').then( m => m.FilmeDetalhePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
