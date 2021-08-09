import { Component, EventEmitter,OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  
  
  @Input() status:string = "HI";
  
  @Output() onSendData= new EventEmitter(null);

  onClickTest(event:any) {
    console.log('EVENT CLICK', event);
    
  }

  constructor() { }

  ngOnInit() {
  }

}