import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trans',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit() {
  }

}
