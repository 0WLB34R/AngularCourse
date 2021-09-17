import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})

export class FetchService {

  private url = 'https://bitcoin-test-a0874-default-rtdb.firebaseio.com'; //CHANGE THIS LATER

  constructor(private http: HttpClient) {}

  public getAllWallets(): Observable<any> {
    return this.http.get(`${this.url}/wallets.json`);
  }

  public getAllTrans(): Observable<any> {
    return this.http.get(`${this.url}/transactions.json`);
  }

  public createTrans(body: any): Observable<any> {
    return this.http.post(`${this.url}/transactions.json`, body);
  }

  public updateTrans(id: string, body: any): Observable<any> {
    return this.http.put(`${this.url}/transactions/${id}.json`, body);
  }

  public deleteTrans(id: string): Observable<any> {
    return this.http.delete(`${this.url}/transactions/${id}.json`);
  }

  public createWall(body: any): Observable<any> {
    return this.http.post(`${this.url}/wallets.json`, body);
  }

  public updateWall(id: string, body: any): Observable<any> {
    return this.http.put(`${this.url}/wallets/${id}.json`, body);
  }

  public deleteWall(id: string): Observable<any> {
    return this.http.delete(`${this.url}/wallets/${id}.json`);
  }
}