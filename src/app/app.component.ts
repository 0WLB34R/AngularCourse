import { Component } from '@angular/core';
import { FetchService } from './fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  wallets: any[] = [];
  trans: any[] = [];

  constructor(private fetcher: FetchService) {}

  ngOnInit(): void {
    this.buildWallets();
    this.buildTrans();
  }

  buildWallets(): void {
    this.fetcher.getAllWallets().subscribe(
      (res) =>
        (this.wallets = Object.entries(res).map((s: any) => ({
          id: s[0],
          ...s[1],
        })))
    );
    this.getTotalBtc()
    this.getTotalEth()
  }

  buildTrans(): void {
    this.fetcher.getAllTrans().subscribe(
      (res) =>
        (this.trans = Object.entries(res).map((s: any) => ({
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

  getTransactionsStatus(): boolean {
    const aux = this.trans.filter((t) => t.mineType === 'PoS' && t.miner <= 5);
    return this.trans.length === aux.length;
  }

  clickMine(trans: any): void {
    const from = this.wallets.find((w) => w.wallet === trans.from);
    const to = this.wallets.find((w) => w.wallet === trans.to);

    from[trans.moneyType] = from[trans.moneyType] - trans.quantity;
    to[trans.moneyType] = to[trans.moneyType] + trans.quantity;

    this.fetcher.deleteTrans(trans.id).subscribe(() => this.buildTrans());
    this.fetcher
      .updateWall(from.id, from)
      .subscribe((res) => this.buildWallets());
    this.fetcher.updateWall(to.id, to).subscribe((res) => this.buildWallets());
  }

  editTrans(tran){
    console.log(tran)
  }

  createTrans(){
    console.log("hole")
  }
}


//10. Se debe colocar un botón llamada EDIT en las transacciones, al dar click a este botón el usuario solo puede editar los campos FROM, TO QUANTITY, MONEY TYPE, TYPE MINE, MINER, luego de editar se debe recargar las transacciones 11. Se debe agregar un formulario que permita crear nuevas transacciones, se debe poder agregar FROM, TO, QUANTITY,MONEY TYPE TYPE MINE, MINER, y el campo date se debe llenar de forma interna con la fecha de creación 12. Se debe utilizar un mismo componente para el formulario de crear y editar