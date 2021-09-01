import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgbButtonsModule, NgbModule, NgbToastModule} from "@ng-bootstrap/ng-bootstrap";
import {MatSliderModule} from "@angular/material/slider";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { Test1Service } from './services/test1.service';

const routes: Routes=[
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    NgbToastModule,
    NgbButtonsModule,
    MatSliderModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
   
  ],
  providers:[Test1Service]
})
export class LoginModule { }