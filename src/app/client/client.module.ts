import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client1Component } from './client1/client1.component';
import { Client2Component } from './client2/client2.component';
import { Provider1Component } from '../provider/provider1/provider1.component';
import { Provider2Component } from '../provider/provider2/provider2.component';
import { Shared1Component } from '../shared/shared1/shared1.component';
import { Shared2Directive } from '../shared/shared2.directive';
import { Shared3Pipe } from '../shared/shared3.pipe';
import { ProviderModule } from '../provider/provider.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProviderModule,
    SharedModule
  ],
  declarations: [
    Client1Component,
    Client2Component
  ],
  exports:[
    Client1Component,
    Client2Component,
    Provider1Component,
    Provider2Component,
    Shared1Component,
    Shared2Directive,
    Shared3Pipe
  ]
})
export class ClientModule { }