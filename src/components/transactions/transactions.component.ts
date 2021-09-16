import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trans',
  templateUrl: './transactions.component.html'
})
export class TransactionsComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit() {
  }

}
