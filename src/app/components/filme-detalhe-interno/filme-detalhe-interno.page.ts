import { FilmeService } from './../../services/filme/filme.service';
import { Filme } from 'src/app/models/filme/filme';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filme-detalhe-interno',
  templateUrl: './filme-detalhe-interno.page.html',
  styleUrls: ['./filme-detalhe-interno.page.scss'],
})
export class FilmeDetalheInternoPage implements OnInit {

  @Input() Id: number = null;
  public Filme: Filme = new Filme();
  public FilmesRelacionados: Filme[] = [];
  public BackgroundImage: string;
  public TextoExibir: string;
  public FilmesSimilaresUrl: string;

  constructor(
    private filmeService: FilmeService,
    private router: Router
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
      this.FilmesSimilaresUrl = '/movie/filmeId/similar'.replace('filmeId', this.Id.toString());
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

  clicouFilme($event)
  {
    this.router.navigate(['/filmes/detalhe/' + $event.id])
  }
}
