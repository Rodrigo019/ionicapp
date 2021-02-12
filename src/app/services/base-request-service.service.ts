import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseRequestService<T> {

  constructor(protected client: HttpClient) { }

  public Get(url: string) : Observable<T> {
    url += '?api_key=51c00948cb3ed8e7a4de7d21ce5700a7&language=pt-BR';
    return this.client.get<T>(url);
  }
}
