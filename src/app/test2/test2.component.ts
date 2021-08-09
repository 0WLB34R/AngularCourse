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

  onClick(){
    this.onClickName.emit('general data '+this.name+' '+this.lastName);
  }


  constructor() { }

  ngOnInit() {
  }

}