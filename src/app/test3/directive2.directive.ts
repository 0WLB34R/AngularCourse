import { Directive, TemplateRef,ViewContainerRef,Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ngIfKen]'
})
export class Directive2Directive implements OnChanges{

  @Input() ngIfKen=true;
  @Output() tes = new EventEmitter<any>(null);

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef:ViewContainerRef) { 

    if(this.ngIfKen){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  ngOnChanges(changes:any){
    console.log(changes.ngIfKen.currentValue);
    this.viewChange(changes.ngIfKen.currentValue);
  }

  viewChange(change:any){
    if(this.ngIfKen){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}