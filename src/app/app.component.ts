import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {BehaviorSubject, of} from 'rxjs'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angCou';
  color:string;
  bgcolor:string;
  sw;
  @Input() listOfNames = [{name:'Juan', lastName:'Gutierrez'},
  {name:'Ken', lastName:'Hervas'},
  {name:'Carlos', lastName:'Perez'},
  {name:'Ximena', lastName:'Valdez'},
  {name:'Juan', lastName:'Lopez'},
]

  tiktok = of([1,2,3,4,5]);
  vide = 1;
  tikktok = new BehaviorSubject(this.vide);
  personD;

  @ViewChild("myDiv1") myDivOne = ElementRef;
  @ViewChild("myCompKen") myComponentKen = ElementRef;
  
  constructor(){
    const testMap = [1,2,3,4,5,6].map(item => item*2);
    console.log(testMap);

    const testforEach = [1,2,3,4,5,6].forEach(item => item*2);
    console.log(testforEach);

    const testFind = [1,2,6,4,5,6].find(item => item === 6);
    console.log(testFind);

    const testFilter = [1,2,3,4,5,6].filter(item => item % 2 === 0);
    console.log(testFilter);

    const testFindIndex = [1,2,2,4,5,6].findIndex(item => item === 2);
    console.log(testFindIndex);

    const testIndexOf = "Ken".indexOf("K");
    console.log(testIndexOf);

    const testJoin = ["k", "e", "n"].join('-');
    console.log(testJoin);

    const testSplit = "Alejandro".split('');
    console.log(testSplit);

    const testSplice = ["k", "e", "n"].splice(1,1);
    console.log(testSplice);

    const testSplice2 = ["k", "e", "n"];
    testSplice2.splice(1,1)
    console.log(testSplice2);

    const testReduce = [1,2,3,4,5,6].reduce((acc,value)=>acc+value, 2);
    console.log(testReduce);


    const testEntries = {name:"Ken", key:"RPC"};
    console.log("Stuff",Object.entries(testEntries));

    const testKey = {name:"Ken", key:"RPC"};
    console.log("Stuff2",Object.keys(testKey));
    console.log("Stuff3",Object.values(testKey));

    let testLetThisBeAVariableInCOntext = 5;
    
    const array1 = [1,2,3,4,5,6];
    const array2 = [9,10,11,...array1]; //called SPREAD, not only for arrays, and used frequently in Redux
    console.log(array2)

    const per3 = {name : "a", age : 12, data1:"c", data2:"d"} //Desestructuracion

    const {name, age} = per3

    console.log(name, age)

    const {data2:dat}= per3

    console.log(dat)

    const arrayOne={1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'} 
    const numArr= Object.keys(arrayOne).map(item => +item).filter(item => item%2===0).reduce((acc,val) => acc+val);
    console.log(numArr);

    const arrayTwo=[1,2,3,4,5,6]
    const strArr=arrayTwo.filter(item=>item%2 != 0).join("")
    console.log(strArr)

    

  //{1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'} convertir a un array y sumar los numeros pares

  //[1,2,3,4,5,6] filtrar los numeros impares y mostrarlos como cadena


    this.tiktok.pipe(
       map(s => s.join('-')),
       map(s=> s+'Hola')
    ).subscribe(v=> {
      console.log('A Video', v);
    });
    
    this.tiktok.subscribe(v=> {
      console.log('B Video', v);
    });
  
    this.tiktok.subscribe(v=> {
      console.log('C Video', v);
    });

    this.personD=this.tikktok.subscribe(v=> {
      console.log('D Video', v);
    });

  
  }


  printHello(event){
    console.log(event);
  }
  
  printData(event){
    console.log('CHILD COMP SENT: ',event);
  }

  onAddVideo(){
    this.vide=this.vide+1
    this.tikktok.next(this.vide);
  }

  personDUnsubscribe(){
    this.personD.unsubscribe();
  }

  test(event){
    console.log(event);
  }

  onShowLocalVars(){
    console.log(this.myDivOne)
  }
}
