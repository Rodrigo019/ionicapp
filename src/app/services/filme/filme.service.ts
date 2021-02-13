import { RetornoFilmes } from './../../models/filme/retornofilmes';
import { RouteReuseStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseRequestService } from '../base-request-service.service';
import { Injectable } from '@angular/core';
import { Filme } from 'src/app/models/filme/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService extends BaseRequestService {

  private readonly urlFilmesPopulares: string = 'https://api.themoviedb.org/3/movie/popular';
  private readonly urlBuscaFilmeEspecifico: string = 'https://api.themoviedb.org/3/movie/';

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
}
