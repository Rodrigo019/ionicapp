import { RetornoSeries } from './../../models/serie/retornoseries';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseRequestService } from './../base-request-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerieService extends BaseRequestService {

  private readonly urlFilmesPopulares: string = 'https://api.themoviedb.org/3/tv/popular';
  private readonly urlBuscaSeriesNoAr: string = 'https://api.themoviedb.org/3/tv/on_the_air';

  constructor(protected client: HttpClient) 
  {
    super(client);
  }

  public BuscarSeriesPopulares(retornoEmPtBr?: boolean, pagina?: number) : Observable<RetornoSeries> 
  {
    return super.Get<RetornoSeries>(this.urlFilmesPopulares, retornoEmPtBr, pagina);
  }

  public BuscarSeriesNoAr(retornoEmPtBr?: boolean, pagina?: number) : Observable<RetornoSeries> {
    let url = this.urlBuscaSeriesNoAr;
    return super.Get<RetornoSeries>(url, retornoEmPtBr, pagina);
  }
}
