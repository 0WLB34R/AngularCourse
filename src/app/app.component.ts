import { Component } from '@angular/core';
import { FetcherService } from './fetcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  wallets: any[] = [];
  trans: any[] = [];

  constructor(private fetcher: FetcherService) {}

  ngOnInit(): void {
    this.buildWallets();
    this.buildtrans();
  }

  buildWallets(): void {
    this.fetcher.getWallet().subscribe(
      (res) =>
        (this.wallets = Object.entries(res).map((s: any) => ({
          id: s[0],
          ...s[1],
        })))
    );
  }

  buildtrans(): void {
    this.fetcher.getTrans().subscribe(
      (res) =>
        (this.transactions = Object.entries(res).map((s: any) => ({
          id: s[0],
          ...s[1],
        })))
    );
  }

  getTotalEth(): number {
    return this.wallets.reduce(
      (acc, value) => acc + (value['eth'] > 0 ? value['eth'] : 0),
      0
    );
  }

  getTotalBtc(): number {
    return this.wallets.reduce(
      (acc, value) => acc + (value['btc'] > 0 ? value['btc'] : 0),
      0
    );
  }
}


