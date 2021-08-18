import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CartComponent,
    LoaderComponent
  ],
  exports:[
    CartComponent,
    LoaderComponent
  ]
})
export class SharedModule { }