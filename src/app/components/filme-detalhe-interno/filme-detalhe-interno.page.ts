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
  private BackgroundImage: string;
  private TextoExibir: string;

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
          this.limitaTexto(this.Filme.overview);
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

  getVoteAvarageColor()
  {
    if (this.Filme.vote_average >= 7)
      return 'success';
    else if (this.Filme.vote_average > 5 && this.Filme.vote_average < 7)
      return 'warning';
    else if (this.Filme.vote_average < 5)
      return 'danger';
  }

  limitaTexto(texto: string)
  {    
    if (texto.length > 200)
      this.TextoExibir = `${texto.substring(0, 200)}...`;
    else
      this.TextoExibir = texto;
  }

}
