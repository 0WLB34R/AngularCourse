import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";
import { WalletComponent } from 'src/components/wallets/wallets.component';
import { TransactionsComponent } from 'src/components/transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

