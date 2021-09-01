import { Component, OnInit } from '@angular/core';
import { SingletonService } from '../../login/services/singleton.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private singleton:SingletonService) {

   }

  ngOnInit() {
  }

  onShowMessage():void{
    console.log(this.singleton.getMessage());
  }

}