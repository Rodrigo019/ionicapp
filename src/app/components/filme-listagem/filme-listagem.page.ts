import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-filme-listagem',
  templateUrl: './filme-listagem.page.html',
  styleUrls: ['./filme-listagem.page.scss'],
})
export class FilmeListagemPage implements OnInit {

  Filmes: string[] = [];
  FilmesPage: string[] = [];
  NomeDoFilme: string = null;
  
  private readonly offset: number = 16;
  private index: number = 0;


  constructor()
  { 
    for (let i: number = 0; i < 100; i++)
    {
      this.Filmes.push(`Item ${i+1}`)
    }
    this.FilmesPage = this.Filmes.slice(this.index, this.offset + this.index);
    this.index += this.offset;
  }
  ngOnInit() {
    
  }

  loadData($event) 
  {
    setTimeout(() => {
      let news = this.Filmes.slice(this.index, this.offset + this.index);
      this.index += this.offset;

      for (let i:number=0; i < news.length; i++)
      {
        this.FilmesPage.push(news[i]);
      }

      $event.target.complete()
    }, 1200);
  }
}
