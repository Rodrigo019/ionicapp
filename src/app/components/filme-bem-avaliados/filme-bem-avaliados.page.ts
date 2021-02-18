import { Filme } from './../../models/filme/filme';
import { FilmeService } from './../../services/filme/filme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme-bem-avaliados',
  templateUrl: './filme-bem-avaliados.page.html',
  styleUrls: ['./filme-bem-avaliados.page.scss'],
})
export class FilmeBemAvaliadosPage implements OnInit {

  public ContFilmes: number = 1;
  public MatrizDeFilmesBemAvaliados: any[] = [];
  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
    this.carregarFilmesBemAvaliados();
  }

  carregarFilmesBemAvaliados()
  { 
    this.filmeService.BuscarFilmesBemAvaliados(true, this.ContFilmes).subscribe(
      retorno => {
        if (retorno)
        {
          let cont = 0;
          let filmesLinha: Filme[] = [];
          
          retorno.results.filter(x => x.poster_path !== null).forEach(x => {
            x.poster_path = `https://www.themoviedb.org/t/p/w500${x.poster_path}`;
            if (cont < 4)
            {            
              filmesLinha.push(x);
              cont++;
            }
            else
            {
              this.MatrizDeFilmesBemAvaliados.push(filmesLinha);
              filmesLinha = [];
              cont = 0;
            }
          });
          this.ContFilmes++;
          if (this.ContFilmes <= 2)
            this.carregarFilmesBemAvaliados();
          console.log(this.MatrizDeFilmesBemAvaliados);
        }
      },
      erro => console.log(erro)
    );
  }

  getVoteAvarageColor(voteAvarage: number)
  {
    if (voteAvarage >= 7)
      return 'success';
    else if (voteAvarage > 5 && voteAvarage < 7)
      return 'warning';
    else if (voteAvarage < 5)
      return 'danger';
  }
}
