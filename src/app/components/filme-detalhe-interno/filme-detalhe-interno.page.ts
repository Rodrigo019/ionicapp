import { FilmeService } from './../../services/filme/filme.service';
import { Filme } from 'src/app/models/filme/filme';
import { Component, Input, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-filme-detalhe-interno',
  templateUrl: './filme-detalhe-interno.page.html',
  styleUrls: ['./filme-detalhe-interno.page.scss'],
})
export class FilmeDetalheInternoPage implements OnInit {

  @Input() Id: number = null;
  private Filme: Filme = new Filme();
  private FilmesRelacionados: Filme[] = [];
  private QtdLinhasGenero: number = null;
  private BackgroundImage: string;

  constructor(
    private filmeService: FilmeService
  ) {
    this.carregaFilme();
  }

  ngOnInit() {
    this.carregaFilme();
  }

  carregaFilme()
  {
    if (this.Id)
    {
      this.filmeService.BuscarFilmeEspecifico(this.Id, true).subscribe(
        retorno => {
          this.Filme = retorno;
          this.Filme.release_date = `${this.Filme.release_date.split('-')[2]}/${this.Filme.release_date.split('-')[1]}/${this.Filme.release_date.split('-')[0]}`
          this.Filme.poster_path = `https://www.themoviedb.org/t/p/original${this.Filme.poster_path}`;
          this.BackgroundImage = this.Filme.poster_path;
          this.QtdLinhasGenero = (this.Filme.genres.length / 3) <= 1 ? 1 : 2;
      },
        erro => {
          console.log(erro);
      });
    }
  }

  getbackgroundImage() 
  {
    return `url(${this.BackgroundImage})`
  }


}
