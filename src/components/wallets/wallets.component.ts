import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
