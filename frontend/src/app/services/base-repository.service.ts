import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseRepositoryService<T> {

  constructor(public httpClient: HttpClient, public url: string) { }
  
  public getAll(): Observable<any> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.get<T[]>(environment.API + `${this.url}`, { headers: headers, responseType: 'json' });
  }

  public getAllDefaul(model: any): Observable<any> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.get<T[]>(environment.API + `${this.url}`, { headers: headers, responseType: 'json' });
  }

  public getId(id: any): Observable<any> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.get<T>(environment.API + `${this.url}/${id}`, { headers: headers, responseType: 'json' })
  }

  public create(model: T): Observable<T> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.post<T>(environment.API + `${this.url}`, model, { headers: headers });
  }

  public update(model: T): Observable<T> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.put<T>(environment.API + `${this.url}`, model, { headers: headers });
  }

  public delete(model: T): Observable<T> {
    const headers: HttpHeaders = this.getHeaders();
    return this.httpClient.delete<T>(environment.API + `${this.url}` + '/' + model, { headers: headers });
  }

  public getHeaders() {
    return new HttpHeaders()
      .set('Content-Type', 'application/json');
  }
}
