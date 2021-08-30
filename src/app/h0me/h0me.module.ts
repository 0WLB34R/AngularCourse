import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { H0meComponent } from './h0me.component';
import { H0me1Component } from './h0me1/h0me1.component';
import { H0me2Component } from './h0me2/h0me2.component';
import { Subh0meComponent } from './subh0me/subh0me.component';

const routes: Routes = [
  {path: '', redirectTo: 'h0me', pathMatch: 'full'},
  {path: 'h0me', component: H0meComponent,
  children: [
    {
      path: 'h0me1', component: H0me1Component
    },
    {
      path: 'h0me2', component: H0me2Component
    }
  ]
  },
  {
    path:'subh0me', component: Subh0meComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    H0meComponent,
    H0me1Component,
    H0me2Component,
    Subh0meComponent
  ]
})
export class H0meModule { }