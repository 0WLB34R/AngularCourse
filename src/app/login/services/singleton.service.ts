import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {
  message:string ='';
  constructor() { }

  getMessage():string{
    return this.message
  }

  setMessage(msg:string):void{
    this.message = msg;
  }

}