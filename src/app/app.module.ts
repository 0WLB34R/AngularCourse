import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule)},
  {path:'pages', loadChildren: ()=> import('./pages/pages.module').then(m => m.PagesModule)},
];

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
