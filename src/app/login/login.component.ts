import { Component, OnInit } from '@angular/core';
import { PublicationService } from './services/publication.service';
import { SingletonService } from './services/singleton.service';
import { Test1Service } from './services/test1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private testService:Test1Service, private singletonService:SingletonService, private publicationService: PublicationService) { 
    console.log(this.testService.getItems());
  }

  ngOnInit() {
    this.publicationService.getAll().subscribe( res => console.log(res));
  }

  setMessage(){
    this.singletonService.setMessage("hi form login");
  }

  update() {

    this.publicationService.updateById('p0002',{
      "date": "17/82/2021",
      "description": "update from frontend",
      "idUser": 2,
      "imageUrl": "http://fitebase/img.jpg",
      "userPhotoUrl": "http://fitebase/user1.jpg"
    } ).subscribe(
      res => console.log(res))
  }

  create(){

    this.publicationService.create({
      "date": "17/82/2021",
      "description": "soy nuevo",
      "idUser": 2,
      "imageUrl": "http://fitebase/img.jpg",
      "userPhotoUrl": "http://fitebase/user1.jpg"
    } ).subscribe(
      res => console.log(res))

  }

  delete(){
    this.publicationService.delete('p0002').subscribe(
      res => console.log(res))
  }



}