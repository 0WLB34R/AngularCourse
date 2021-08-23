import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoolToYNPipe } from './bool-to-yn.pipe';
import { PersonaComponent } from './person/person.component';
import { StrToDatePipe } from './str-to-date.pipe';
import { TOFPipe } from './t-of.pipe';




@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    TOFPipe,
    StrToDatePipe,
    BoolToYNPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
