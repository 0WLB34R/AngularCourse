import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  name = "Name";
  lastname = "Last Name";

  printName(){
    console.log("Name: "+this.name+" "+this.lastname)
  }

  constructor() { }

  ngOnInit() {
  }

}