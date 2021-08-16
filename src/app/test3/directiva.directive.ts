import { Directive, ElementRef,EventEmitter,HostListener,Input, Output, OnChanges } from '@angular/core';

@Directive({
  selector: '[testdirective]'
})
export class DirectivaDirective implements OnChanges{

  ccolor:string;
  @Input() color:string;
  @Input() testdirective:string = 'yellow';
  @Output() testoutput = new EventEmitter<any>(null);
  @HostListener('click') onClick(){
    this.element.nativeElement.style.backgroundColor=this.testdirective;
  };

  //@HostListener('mouseleave') onMouseLeave(){
  //  this.setBackgroundColor(this.ccolor);
  //  console.log(this.testdirective)
 // };

 //@HostListener('mouseenter') onMouseEnter(){
 //   this.setBackgroundColor("blue");
//  this.testoutput.emit('test my output');
//  };

  constructor(private element:ElementRef) { 
    this.setBackgroundColor(this.testdirective);
  }

  setBackgroundColor(color:string){
    this.element.nativeElement.style.backgroundColor=color;;
  }

  ngOnChanges(changes:any){
    console.log(changes.testdirective.currentValue);
    this.setBackgroundColor(changes.testdirective.currentValue)
  }

}