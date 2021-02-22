import { Serie } from './../../models/serie/serie';
import { SerieService } from './../../services/serie/serie.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-serie-listagem',
  templateUrl: './serie-listagem.page.html',
  styleUrls: ['./serie-listagem.page.scss'],
})
export class SerieListagemPage implements OnInit {

  protected SerieMemoria: Serie[] = [];
  protected MatrizDeSeries: any[] = []; 
  private Series: Serie[] = [];   
  private Index: number = 1;

  constructor(
    protected serieService: SerieService
  )
  {      
  }

  ngOnInit() {

    this.serieService.BuscarSeriesPopulares(true, this.Index).subscribe(
      retorno => {
       if (retorno)
       {
        let cont = 0;
        let seriesLinha: Serie[] = [];
        
        retorno.results.forEach(x => {
          x.poster_path = `https://www.themoviedb.org/t/p/w500${x.poster_path}`;          
          seriesLinha.push(x);
          cont++;
          if (cont == 3)
          {
            this.MatrizDeSeries.push(seriesLinha);
            seriesLinha = [];
            cont = 0;
          }
        });
        this.Index++;
       }
    },
     erro => {
       console.log(erro);
    });
  }

  loadData($event) 
  {
    setTimeout(() => {
     this.serieService.BuscarSeriesPopulares(true, this.Index).subscribe(
         retorno => {
           
          let cont = 0;
          let filmesLinha: Serie[] = [];

          retorno.results.forEach(x => {
            x.poster_path = `https://www.themoviedb.org/t/p/w500${x.poster_path}`;
            if (cont < 3)
            {            
              filmesLinha.push(x);
              cont++;
            }
            else
            {
              this.MatrizDeSeries.push(filmesLinha);
              filmesLinha = [];
              cont = 0;
            }

          });
          this.Index++;
          $event.target.complete();
       }, 
         erro => {
           console.log(erro);
       });
    }, 1200);
  }

  filtrar($event) {

  }
}
