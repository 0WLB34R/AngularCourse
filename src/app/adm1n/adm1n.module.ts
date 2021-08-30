import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Adm1nComponent } from './adm1n.component';
import { Subadm1nComponent } from './subadm1n/subadm1n.component';
import { Adm1n1Component } from './adm1n1/adm1n1.component';
import { Adm1n2Component } from './adm1n2/adm1n2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'adm1n', pathMatch: 'full'},
  {path: 'adm1n', component: Adm1nComponent,
  children: [
    {
      path: 'adm1n1', component: Adm1n1Component
    },
    {
      path: 'adm1n2', component: Adm1n2Component
    }
  ]
  },
  {
    path:'subadm1n', component: Subadm1nComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Adm1nComponent,
    Subadm1nComponent,
    Adm1n1Component,
    Adm1n2Component
  ]
})
export class Adm1nModule { }