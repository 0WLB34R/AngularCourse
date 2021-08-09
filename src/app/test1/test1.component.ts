import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  
  
  @Input() status:string = "HI";
  
  constructor() { }

  ngOnInit() {
  }

}