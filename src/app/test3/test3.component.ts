import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit,OnChanges {

  @Input() test = 'aaa';
  @Input() names;

  @Input() listOfNames = [{name:'juan', lastName:'Gutierrez'},
  {name:'Ken', lastName:'Hervas'},
  {name:'Carlos', lastName:'Perez'},
  {name:'Ximena', lastName:'Valdez'},
]

  name = "Name";
  lastname = "Last Name";

  printName(){
    console.log("Name: "+this.name+" "+this.lastname)
  }

  constructor() {
    console.log('CONTRUCTOR');
  }

  ngOnChanges(changes:any){
    console.log('ON CHANGES', changes);

  }

  ngOnInit(){
    console.log('ON INIT');
  }


  ngDoCheck(){
    console.log('DO CHECK');
  }


  ngAfterViewInit(){
    console.log('VIEW INIT');
  }

  ngAfterContentInit(){
    console.log('CONTENT INIT');
  }

  ngAfterContentChecked(){
    console.log('CONTENT CHECK');
  }

  ngAfterViewChecked(){
    console.log('VIEW CHECK');
  }

  ngOnDestroy(){
    console.log('ON DESTROY');
  }

}