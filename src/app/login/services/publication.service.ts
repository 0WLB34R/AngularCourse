import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class PublicationService {

  baseUrl = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>{
    return this.http.get(`${this.baseUrl}/publications.json`)
  }

  public updateById(id: string, body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/publications/${id}.json`,
    body)
  }

  public create(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/publications.json`,
    body)
  }

  public delete(id: string):Observable<any>{
    return this.http.delete(`${this.baseUrl}/publications/${id}.json`)
  }

  public patch(id: string, body:any):Observable<any>{
    return this.http.patch(`${this.baseUrl}/publications/${id}.json`,
    body)
  }

}