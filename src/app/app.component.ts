import { Component } from '@angular/core';
import { CommsService } from './comms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  vac=[];
  unvac=[];
  numVac=0;
  numUnvac=0;
  

  constructor(private comm:CommsService){
  this.comm.getAllVac().subscribe(data => this.buildVac(data))
  this.comm.getAllUnvac().subscribe(data => this.buildUnvac(data))
  }

  buildVac(data:any){
    this.vac=Object.entries(data);
  }

  buildUnvac(data:any){
    this.unvac=Object.entries(data);
    this.checkNum()
  }

  Vaccinate(id,name,age,date,disease,doses, vaccineType){
    var tempDoses = doses+1
    this.comm.updateVac(id,tempDoses).subscribe(res => console.log(res))
    if(vaccineType === "A" && tempDoses ===1){
      this.comm.deletePerson(id).subscribe(res => console.log(res))
      this.comm.createPerson({"name": name, "age": age, "date": date, "disease": disease, "vaccineType": vaccineType, "vaccined":1, "doses": doses}).subscribe(res => console.log(res))
    }else if(vaccineType === "B"&& tempDoses ===2){
      this.comm.deletePerson(id).subscribe(res => console.log(res))
      this.comm.createPerson({"name": name, "age": age, "date": date, "disease": disease, "vaccineType": vaccineType, "vaccined":1, "doses": doses}).subscribe(res => console.log(res))
    }else if(vaccineType === "C"&& tempDoses ===3){
      this.comm.deletePerson(id).subscribe(res => console.log(res))
      this.comm.createPerson({"name": name, "age": age, "date": date, "disease": disease, "vaccineType": vaccineType, "vaccined":1, "doses": doses}).subscribe(res => console.log(res))
    }

    this.vac=[]
    this.unvac=[]
    
    this.comm.getAllVac().subscribe(data => this.buildVac(data))
    this.comm.getAllUnvac().subscribe(data => this.buildUnvac(data))
    this.checkAllVac()
    this.checkNum()


    window.location.reload();
  }

  checkAllVac():boolean{
    return this.unvac.filter(person => person[1]['disease'] === false && person[1]['age'] >=18 ) ===undefined
  }

  checkNum(){
    this.numVac=0
    this.numUnvac=0
    this.numVac=this.vac.length
    this.numUnvac=this.unvac.length
  }
}
