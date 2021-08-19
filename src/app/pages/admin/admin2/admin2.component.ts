import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin2',
  template: `
  <div>I AM ADMIN 2</div>
  <p>{{test2 ?? test3}}</p>
  <p>{{test2 || 'the other one'}}</p>
  <button (click)="testParams('111111')"> test </button>`,
  
  styles: [` div{ background-color: green; }`]
})
export class Admin2Component implements OnInit {

  test2 = null;
  test3 = 'maria';

  constructor() { }

  ngOnInit() {
  }

  /**
   * @params name
   * @params lastName
   * return name and LastName joined
   * 
   */
  public testParams(name:string, lastName?: string = 'gutierrez'): string {
    const aux = 'juan';
    console.log((name ?? aux) + ' '+lastName);
    return name +' '+lastName; 
  }


}