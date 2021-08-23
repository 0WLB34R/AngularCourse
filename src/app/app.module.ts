import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
