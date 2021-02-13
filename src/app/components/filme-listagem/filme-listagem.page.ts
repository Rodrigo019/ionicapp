import { Filme } from 'src/app/models/filme/filme';
import { FilmeService } from './../../services/filme/filme.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme-listagem',
  templateUrl: './filme-listagem.page.html',
  styleUrls: ['./filme-listagem.page.scss'],
})
export class FilmeListagemPage implements OnInit {

  @Input() NomeDoFilme: string = null;  

  private FilmesMemoria: Filme[] = [];
  private FilmesCarregados: Filme[] = [];
  private Filmes: Filme[] = [];  
  private Index: number = 1;

  constructor(
    protected filmeService: FilmeService
  )
  { 
     this.filmeService.BuscarFilmesPopulares(true, this.Index).subscribe(
       retorno => {
        if (retorno)
        {
          retorno.results.forEach((x,i) => 
          {
            x.poster_path = `https://www.themoviedb.org/t/p/original${x.poster_path}`;
            this.Filmes.push(x);
          });
          this.Index++;
        }
     },
       erro => {
         console.log(erro);
     });
  }

  ngOnInit() {
    this.carregarFilmesMemoria();
  }

  loadData($event) 
  {
    setTimeout(() => {
     this.filmeService.BuscarFilmesPopulares(true, this.Index).subscribe(
         retorno => {
           retorno.results.forEach(x => 
             {
               x.poster_path = `https://www.themoviedb.org/t/p/original${x.poster_path}`;
               this.Filmes.push(x);
             });
           this.Index++;
           $event.target.complete();
       }, 
         erro => {
           console.log(erro);
       });
    }, 1200);
  }

  carregarFilmesMemoria()
  {
    for (let i=1; i<=500; i++)
    {
      this.filmeService.BuscarFilmesPopulares(true, i).subscribe(
        retorno => {
          retorno.results.forEach(x => 
          {
            x.poster_path = `https://www.themoviedb.org/t/p/original${x.poster_path}`;
            this.FilmesMemoria.push(x);
          });
      }, 
        erro => {
          console.log(erro);
      });
    }
  }

  filtrar($event) {
    if ($event.length > 0)
    {
      console.log($event);
      this.FilmesCarregados = this.Filmes;
      this.Filmes = $event;
      this.Filmes.concat($event)
    }
  }
}
