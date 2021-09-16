import { Component } from '@angular/core';
import { FetcherService } from './fetcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  wallets: any[] = [];
  trans: any[] = [];


constructor(private fetcher:FetcherService) {
}

  ngOnInit(): void {
    this.buildWallets();
    this.buildtrans();
  }

  buildWallets(){

  }

  buildtrans(){
    
  }



}
