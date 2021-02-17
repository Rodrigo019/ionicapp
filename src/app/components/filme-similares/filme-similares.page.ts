import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from './../../models/filme/filme';
import { FilmeService } from './../../services/filme/filme.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-filme-similares',
  templateUrl: './filme-similares.page.html',
  styleUrls: ['./filme-similares.page.scss'],
})
export class FilmeSimilaresPage implements OnInit, OnChanges {

  @Input() FilmeId: number;
  private Imagens: string [] = [];
  private MatrizDeFilmes: any[] = [];
  private Index: number = 1;
  private TotalPaginas: number;

  private slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private filmeService: FilmeService, private router: Router) { }

  ngOnInit() {

  }

  ngOnChanges(): void {
    if (this.FilmeId !== undefined)
      this.buscarFilmes();
    console.log(this.MatrizDeFilmes)
  }

  buscarFilmes()
  {
    this.filmeService.BuscarFilmesSimilares(this.FilmeId, true, this.Index).subscribe(
      retorno => {
        this.TotalPaginas = retorno.total_pages;
      if (retorno)
      {
        let cont = 0;
        let filmesLinha: Filme[] = [];
        
        retorno.results.forEach(x => {
          x.poster_path = `https://www.themoviedb.org/t/p/original${x.poster_path}`;
          this.Imagens.push(x.poster_path);
          if (cont < 4)
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
        if (this.Index <= this.TotalPaginas)
          this.buscarFilmes();
      }
    },
    erro => {
      console.log(erro);
    });
  }

  navegarParaFilme()
  {
    this.router.navigate(['/filmes/filme-detalhe/', { id: this.FilmeId }]);
  }
}
