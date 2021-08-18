import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hom1Component } from './home1/hom1.component';
import { Home2Component } from './home2/home2.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    Hom1Component,
    Home2Component
  ]
})
export class HomeModule { }