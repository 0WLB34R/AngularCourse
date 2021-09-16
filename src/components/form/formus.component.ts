import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formus',
  templateUrl: './formus.component.html',
  styleUrls: ['./formus.component.css']
})
export class FormComponent implements OnInit {
  
 
  constructor() {

  }

  ngOnInit() {
  }
  
  onSubmitTemplate(values:any){
    console.log('VALUES: ', values)
  }
}