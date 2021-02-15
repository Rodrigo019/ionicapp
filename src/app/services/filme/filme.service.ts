import { RetornoFilmes } from './../../models/filme/retornofilmes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseRequestService } from '../base-request-service.service';
import { Injectable } from '@angular/core';
import { Filme } from 'src/app/models/filme/filme';
import { RetornoReviews } from 'src/app/models/filme/retornoreviews';

@Injectable({
  providedIn: 'root'
})
export class FilmeService extends BaseRequestService {

  private readonly urlFilmesPopulares: string = 'https://api.themoviedb.org/3/movie/popular';
  private readonly urlBuscaFilmeEspecifico: string = 'https://api.themoviedb.org/3/movie/';
  private readonly urlBuscaWhatchProviders: string = 'https://api.themoviedb.org/3/movie/filmeId/watch/providers'
  private readonly urlBuscaReviews: string = 'https://api.themoviedb.org/3/movie/filmeId/reviews';

  constructor(protected client: HttpClient) 
  {
    super(client);
  }

  public BuscarFilmesPopulares(retornoEmPtBr?: boolean, pagina?: number) : Observable<RetornoFilmes> 
  {
    return super.Get<RetornoFilmes>(this.urlFilmesPopulares, retornoEmPtBr, pagina);
  }

  public BuscarFilmeEspecifico(filmeId: number, retornoEmPtBr?: boolean, pagina?: number) : Observable<Filme>
  {
    return super.Get(`${this.urlBuscaFilmeEspecifico}${filmeId}`, retornoEmPtBr, pagina);
  }

  public BuscarWatchProviders(filmeId: number): Observable<string>
  {
    let url = this.urlBuscaWhatchProviders;
    url = url.replace('filmeId', filmeId.toString());

    return super.Get(url);
  }

  public BuscarReviews(filmeId: number, retornoEmPtBr?: boolean, pagina?: number) : Observable<RetornoReviews>
  {
    let url = this.urlBuscaReviews;
    url = url.replace('filmeId', filmeId.toString());

    return super.Get(url, retornoEmPtBr, pagina);
  }
  
}
