import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h0me',
  template:`<p>h0me works!<p> <router-outlet></router-outlet>`,
  styleUrls: ['./h0me.component.css']
})
export class H0meComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}