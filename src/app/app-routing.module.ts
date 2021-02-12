import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
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
    path: 'filme-listagem',
    loadChildren: () => import('./components/filme-listagem/filme-listagem.module').then( m => m.FilmeListagemPageModule)
  },
  {
    path: 'serie-listagem',
    loadChildren: () => import('./components/serie-listagem/serie-listagem.module').then( m => m.SerieListagemPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
