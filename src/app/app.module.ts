import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WalletComponent } from '../components/wallets/wallets.component';
import { TransactionsComponent } from '../components/transactions/transactions.component';
import { FormComponent } from '../components/form/form.component';

@NgModule({
  declarations: [AppComponent, WalletComponent, TransactionsComponent, FormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent]
})
export class AppModule {}
