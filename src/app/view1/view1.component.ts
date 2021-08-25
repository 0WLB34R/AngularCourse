import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view1',
  template:`<p>view1 works<p>
  <router-outlet></router-outlet>`,
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}