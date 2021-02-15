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
  private Filmes: Filme[] = []; 
  private MatrizDeFilmes: any[] = []; 
  private Index: number = 1;

  constructor(
    protected filmeService: FilmeService
  )
  {      
  }

  ngOnInit() {

    this.filmeService.BuscarFilmesPopulares(true, this.Index).subscribe(
      retorno => {
       if (retorno)
       {
        //  retorno.results.forEach((x,i) => 
        //  {
        //    x.poster_path = `https://www.themoviedb.org/t/p/original${x.poster_path}`;
        //    this.Filmes.push(x);
        //  });
        //  this.Index++;

        let cont = 0;
        let filmesLinha: Filme[] = [];
        
        retorno.results.forEach(x => {
          x.poster_path = `https://www.themoviedb.org/t/p/original${x.poster_path}`;
          if (cont < 3)
          {            
            filmesLinha.push(x);
            cont++;
          }
          else
          {
            this.MatrizDeFilmes.push(filmesLinha);
            filmesLinha = [];
            cont = 0;
          }
        });
        this.Index++;
       }
    },
     erro => {
       console.log(erro);
    });

    this.carregarFilmesMemoria();
  }

  loadData($event) 
  {
    setTimeout(() => {
     this.filmeService.BuscarFilmesPopulares(true, this.Index).subscribe(
         retorno => {
           
          let cont = 0;
          let filmesLinha: Filme[] = [];

          retorno.results.forEach(x => {
            x.poster_path = `https://www.themoviedb.org/t/p/original${x.poster_path}`;
            if (cont < 3)
            {            
              filmesLinha.push(x);
              cont++;
            }
            else
            {
              this.MatrizDeFilmes.push(filmesLinha);
              filmesLinha = [];
              cont = 0;
            }

          });
          this.Index++;
          
          //  retorno.results.forEach(x => 
          //    {
          //      x.poster_path = `https://www.themoviedb.org/t/p/original${x.poster_path}`;
          //      this.Filmes.push(x);
          //    });
          //  this.Index++;
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
    this.MatrizDeFilmes = [];
    if ($event.length > 0)
    {
      let cont = 0;
      let filmesLinha: Filme[] = [];
      $event.forEach(x => {
        if (cont < 3)
        {            
          filmesLinha.push(x);
          cont++;
        }
        else
        {
          this.MatrizDeFilmes.push(filmesLinha);
          filmesLinha = [];
          cont = 0;
        }
      });
    }
  }
}
