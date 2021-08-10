import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  @Input() name:string = "";
  @Input() lastName:string = "";

  @Output() onClickName= new EventEmitter(null);

  @Output() meButton=new EventEmitter(null);

  myvar1 = "hola";
  mynum1 = 0;
  mynum2 = 0;
  
  

  onClick(){
    this.onClickName.emit('general data '+this.name+' '+this.lastName);
  }

  testMet(){
    console.log("You clicked me")
    this.meButton.emit("HI")
  }

  add(){
    console.log(this.mynum1+this.mynum2);
  }

  constructor() { }

  ngOnInit() {
  }

}