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

  private Filmes: Filme[] = []; 
  private FilmesFiltrados: Filme[] = [];  
  private index: number = 1;

  constructor(
    protected filmeService: FilmeService
  )
  {    
    this.filmeService.BuscarFilmesPopulares(true, this.index).subscribe(
      retorno => {
        if (retorno)
        {
          retorno.results.forEach((x,i) => 
          {
            x.poster_path = `https://www.themoviedb.org/t/p/original${x.poster_path}`;
            this.Filmes.push(x);
          });
          this.index++;
        }
    },
      erro => {
        console.log(erro);
    });
  }

  ngOnInit() {
    
  }

  loadData($event) 
  {
    setTimeout(() => {

      this.filmeService.BuscarFilmesPopulares(true, this.index).subscribe(
        retorno => {
          retorno.results.forEach(x => 
            {
              x.poster_path = `https://www.themoviedb.org/t/p/original${x.poster_path}`;
              this.Filmes.push(x);
            });
          this.index++;
          $event.target.complete();
      }, 
        erro => {
          console.log(erro);
      });
    }, 1200);
  }

  filtrar($event: Filme[])
  {
    this.FilmesFiltrados = $event;
    console.log(this.FilmesFiltrados);
  }
}
