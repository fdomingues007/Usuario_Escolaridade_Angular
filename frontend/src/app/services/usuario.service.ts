import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario.model';
import { BaseRepositoryService } from './base-repository.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseRepositoryService<Usuario> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'Usuarios');
  }

  public getAll(): Observable<Usuario[]> {
    const headers: HttpHeaders = this.getHeaders();
    const url = 'usuarios/v1/listar';
    return this.httpClient.get<Usuario[]>(environment.API + `${url}`, { headers: headers, responseType: 'json' });
  }
  public getId(id: number): Observable<Usuario> {
    const headers: HttpHeaders = this.getHeaders();
    const url = 'usuarios/v1/getUsuarioId';
    return this.httpClient.get<Usuario>(environment.API + `${url}/${id}`, { headers: headers, responseType: 'json' })
  }

  public create(model: Usuario): Observable<Usuario> {
    const headers: HttpHeaders = this.getHeaders();
    const url = 'usuarios/v1/adicionar';
    return this.httpClient.post<Usuario>(environment.API + `${url}`, model, { headers: headers });
  }

  public update(model: Usuario): Observable<Usuario> {
    const headers: HttpHeaders = this.getHeaders();
    const url = 'usuarios/v1/alterar';
    return this.httpClient.put<Usuario>(environment.API + `${url}`, model, { headers: headers });
  }

  public delete(id: number): Observable<Usuario> {
    const headers: HttpHeaders = this.getHeaders();
    const url = 'usuarios/v1/delete';
    return this.httpClient.delete<Usuario>(environment.API + `${url}/${id}`, { headers: headers });
  }

}
