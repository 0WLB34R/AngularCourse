import { Component, ElementRef, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allPeople =
    [
      {name: "juan", age: 16, date: "2019-09-07T15:50+00Z", disease: true, vaccineType: "A", vaccined:0, doses: 0},
      {name: "maria", age: 23, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "B", vaccined:1, doses: 2},
      {name: "carla", age: 45, date: "2019-09-07T15:50+00Z", disease: true, vaccineType: "C", vaccined:0, doses: 0},
      {name: "marco", age: 50, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "A", vaccined:1, doses: 1},
      {name: "marta", age: 12, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "A", vaccined:0, doses: 0},
      {name: "jorge", age: 36, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "C", vaccined:1, doses: 3},
      {name: "maritza", age: 18, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "C", vaccined:0, doses: 0},
      {name: "leonardo", age: 35, date: "2019-09-07T15:50+00Z", disease: true, vaccineType: "B", vaccined:0, doses: 0},
      {name: "ramiro", age: 24, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "B", vaccined:1, doses: 2},
      {name: "juana", age: 13, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "A", vaccined:0, doses: 0}
     ]

    vac = this.allPeople.filter(per => per.vaccined);
    noVac = this.allPeople.filter(per => !(per.vaccined));
    AllPosVac = this.allPeople.filter(per => per.age>=18 && !per.disease);
    aType=this.allPeople.filter(per => per.vaccineType === 'A').length;
    bType=this.allPeople.filter(per => per.vaccineType === 'B').length;
    cType=this.allPeople.filter(per => per.vaccineType === 'C').length;

  
  constructor(){

    console.log(Object.values(this.AllPosVac));
  }

  vaccinate(per:any) {
    const index = this.noVac.findIndex(item => item === per);
    per.doses = per.doses +1;
    if(per.vaccineType === "A"){
      if(per.doses  === 1){
        this.noVac.splice(index, 1);
        per.vaccined = 1
        this.vac.push(per);
      }
    } else if(per.vaccineType === "B"){
      if(per.doses  === 2){
        this.noVac.splice(index, 1);
        per.vaccined = 1
        this.vac.push(per);
      }
    } else if(per.vaccineType === "C"){
      if(per.doses  === 3){
        this.noVac.splice(index, 1);
        per.vaccined = 1
        this.vac.push(per);
      }
    }
  }
}
