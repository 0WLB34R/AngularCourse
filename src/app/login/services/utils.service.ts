import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UtilsService {

  private data$ = new BehaviorSubject<number>(0);

  constructor() { }

  public getData():number{
    return this.data$.getValue();
  }

  public setData(data:number){
    this.data$.next(data);
  }

  public currentData():Observable<number>{
    return this.data$.asObservable();
  }

}