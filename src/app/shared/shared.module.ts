import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { LoaderComponent } from './loader/loader.component';
import { ExponentPipe } from './exponent.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CartComponent,
    LoaderComponent,
    ExponentPipe
  ],
  exports:[
    CartComponent,
    LoaderComponent,
    ExponentPipe
  ]
})
export class SharedModule { }