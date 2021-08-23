import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { SharedModule } from '../shared/shared.module';
import { Shared1Component } from '../shared/shared1/shared1.component';
import { Shared2Directive } from '../shared/shared2.directive';
import { Shared3Pipe } from '../shared/shared3.pipe';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [Product1Component, Product2Component],
  exports:[
    Product1Component,
    Product2Component,
    Shared1Component,
    Shared2Directive,
    Shared3Pipe
  ]
})
export class ProductModule { }