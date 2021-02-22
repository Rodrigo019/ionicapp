import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseRequestService {

  private readonly apiKey: string = '51c00948cb3ed8e7a4de7d21ce5700a7';

  constructor(protected client: HttpClient) { }

  public Get<T>(url: string, retornoEmPtBr?: boolean, pagina?: number) : Observable<T> {

    if (url.includes('?query='))
    {
      url = `${url}&api_key=${this.apiKey}`;
    }
    else
    {
      url = `${url}?api_key=${this.apiKey}`;
    }

    if (retornoEmPtBr)
      url = `${url}&language=pt-BR`;
    if (pagina)
      url = `${url}&page=${pagina}`
    
    return this.client.get<T>(url);
  }
}
