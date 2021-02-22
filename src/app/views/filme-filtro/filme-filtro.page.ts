import { Filme } from './../../models/filme/filme';
import { FilmeService } from './../../services/filme/filme.service';
import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx'
import { Router } from '@angular/router';

@Component({
  selector: 'app-filme-filtro',
  templateUrl: './filme-filtro.page.html',
  styleUrls: ['./filme-filtro.page.scss'],
})
export class FilmeFiltroPage implements OnInit {

  public busca: string;
  public MatrizDeFilmes: any[] = [];

  constructor(
    private keyboard: Keyboard,
    private filmeService: FilmeService,
    private router: Router) { }

  ngOnInit() {
  }

  submit() {
    if(this.MatrizDeFilmes.length > 0) this.MatrizDeFilmes = [];
    this.keyboard.hide();
    this.buscarFilmes();
  }

  ionClear()
  {
    this.MatrizDeFilmes = [];
  }

  ionChange($event)
  {
    this.busca = $event.detail.value;
  }

  click(filme)
  {
    this.router.navigate(['/filmes/detalhe/' + filme.id])
  }

  buscarFilmes()
  {
    if (this.busca !== undefined)
    {
      this.filmeService.BuscaPorTitulo(this.busca, true).subscribe(
        retorno => {
            let cont = 0, total = 0;
            let filmesLinha: Filme[] = [];
            let filmesUsar = retorno.results.filter(x => x.poster_path !== null);
            filmesUsar.forEach(x => {
              x.poster_path = `https://www.themoviedb.org/t/p/w500${x.poster_path}`; 
              filmesLinha.push(x);
              cont++;
              total++;
              if (cont == 3 || total == filmesUsar.length)
              {
                this.MatrizDeFilmes.push(filmesLinha);
                filmesLinha = [];
                cont = 0;
              }
            });
          }, 
          erro => { console.log(erro); }
        );
    }
  }
}
