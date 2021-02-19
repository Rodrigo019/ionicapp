import { Serie } from './../../models/serie/serie';
import { SerieService } from './../../services/serie/serie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie-no-ar',
  templateUrl: './serie-no-ar.page.html',
  styleUrls: ['./serie-no-ar.page.scss'],
})
export class SerieNoArPage implements OnInit {
  public ContSeries: number = 1;
  public MatrizDeSeriesNoAr: any[] = [];
  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.carregarSeriesNoAr();
  }

  carregarSeriesNoAr()
  { 
    console.log(this.ContSeries);
    console.log(this.MatrizDeSeriesNoAr);
    this.serieService.BuscarSeriesNoAr(true, this.ContSeries).subscribe(
      retorno => {
        if (retorno)
        {
          let cont = 0;
          let seriesLinha: Serie[] = [];
          
          retorno.results.filter(x => x.poster_path !== null && x.original_language !== 'ja').forEach(x => {
            x.poster_path = `https://www.themoviedb.org/t/p/w500${x.poster_path}`;
            if (cont < 4)
            {            
              seriesLinha.push(x);
              cont++;
            }
            else
            {
              this.MatrizDeSeriesNoAr.push(seriesLinha);
              seriesLinha = [];
              cont = 0;
            }
          });
          this.ContSeries++;
          if (this.ContSeries <= 10){
            this.carregarSeriesNoAr();
          }
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
