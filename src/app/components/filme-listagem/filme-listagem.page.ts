import { Filme } from 'src/app/models/filme/filme';
import { Filme } from './../../models/filme/filme';
import { FilmeService } from './../../services/filme/filme.service';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-filme-listagem',
  templateUrl: './filme-listagem.page.html',
  styleUrls: ['./filme-listagem.page.scss'],
})
export class FilmeListagemPage implements OnInit {

  Filmes: Filme[] = [];  
  NomeDoFilme: string = null;
  
  private index: number = 1;

  constructor(
    protected filmeService: FilmeService
  )
  {    
    this.filmeService.BuscarFilmesPopulares(true, this.index).subscribe(
      retorno => {
        if (retorno)
        {
          retorno.results.forEach((x,i) => this.Filmes.push(x));
          this.index++;

          console.log(this.Filmes);
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
          retorno.results.forEach(x => this.Filmes.push(x));
          this.index++;
          $event.target.complete();
      }, 
        erro => {
          console.log(erro);
      });
    }, 1200);
  }
}
