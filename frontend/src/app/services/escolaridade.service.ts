import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Escolaridade } from '../model/escolaridade.model';
import { BaseRepositoryService } from './base-repository.service';

@Injectable({
  providedIn: 'root'
})
export class EscolaridadeService extends BaseRepositoryService<any> {

  constructor(httpClient: HttpClient){
    super(httpClient, 'Escolaridade');
  }

  public getAll(): Observable<Escolaridade[]> {
    const headers: HttpHeaders = this.getHeaders();
    const url = 'escolaridade/v1/listar';
    return this.httpClient.get<Escolaridade[]>(environment.API + `${url}`, { headers: headers, responseType: 'json' });
  }
}
