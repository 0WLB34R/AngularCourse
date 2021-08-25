import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { LoaderComponent } from './loader/loader.component';

import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import { ExponentPipe } from './pipes/exponent.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CartComponent,
    LoaderComponent,
    ExponentPipe,
    PurePipe,
    ImpurePipe
  ],
  exports:[
    CartComponent,
    LoaderComponent,
    ExponentPipe,
    PurePipe,
    ImpurePipe
  ]
})
export class SharedModule { }