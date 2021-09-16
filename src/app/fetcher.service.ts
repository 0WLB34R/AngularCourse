import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetcherService {
  constructor() {}
}

@Injectable()
export class TransactionService {
  private url = 'https://test-3c7e8-default-rtdb.firebaseio.com'; //CHANGE THIS LATER

  constructor(private http: HttpClient) {}

  public getWallets(): Observable<any> {
    return this.http.get(`${this.url}/wallets.json`);
  }

  public getTrans(): Observable<any> {
    return this.http.get(`${this.url}/transactions.json`);
  }

  public create(body: any): Observable<any> {
    return this.http.post(`${this.url}/transactions.json`, body);
  }

  public update(id: string, body: any): Observable<any> {
    return this.http.put(`${this.url}/transactions/${id}.json`, body);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/transactions/${id}.json`);
  }
}
