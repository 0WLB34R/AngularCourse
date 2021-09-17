import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommService } from '../../app/comm.service';
import { FetchService } from '../../app/fetch.service';
import { RealoaderService } from '../../app/realoader.service';

@Component({
  selector: 'formus',
  templateUrl: './formus.component.html',
  styleUrls: ['./formus.component.css'],
})
export class FormComponent implements OnInit {
  @Input() mode = 'Create';

  data: any[] = [];

  from: string = 'from';
  to: string = 'to';
  quantity: string = 'quantity';
  moneyType: string = 'moneyType';
  mineType: string = 'mineType';
  miner: string = 'miner';

  constructor(
    private fetcher: FetchService,
    private comm: CommService,
    private reloader: RealoaderService
  ) {}

  ngOnInit() {
    this.comm.mode.subscribe((value) => {
      this.mode = value;
      if (this.mode === 'Create') {
        this.from = 'from';
        this.to = 'to';
        this.quantity = 'quantity';
        this.moneyType = 'moneyType';
        this.mineType = 'mineType';
        this.miner = 'miner';
      } else {
        this.comm.info.subscribe((value) => {
          this.data = value;
          this.from = this.data['from'];
          this.to = this.data['to'];
          this.quantity = this.data['quantity'];
          this.moneyType = this.data['moneyType'];
          this.mineType = this.data['mineType'];
          this.miner = this.data['miner'];
        });
      }
    });
  }

  onSubmitTemplate(f: NgForm) {
    if (this.mode === 'Create') {
      this.fetcher
        .createTrans({
          date: new Date(),
          from: f.value['from'],
          mineType: f.value['mineType'],
          miner: f.value['miner'],
          moneyType: f.value['moneyType'],
          quantity: f.value['quantity'],
          to: f.value['to'],
        })
        .subscribe((res) => {
          console.log(res);
          f.resetForm()
          this.reloader.setLoad(true);
        });
    } else {
      if (f.value['from'] === '') {
        f.value['from'] = this.from;
      }
      if (f.value['mineType'] === '') {
        f.value['mineType'] = this.mineType;
      }
      if (f.value['miner'] === '') {
        f.value['miner'] = this.miner;
      }
      if (f.value['moneyType'] === '') {
        f.value['moneyType'] = this.moneyType;
      }
      if (f.value['quantity'] === '') {
        f.value['quantity'] = this.quantity;
      }
      if (f.value['to'] === '') {
        f.value['to'] = this.to;
      }
      this.fetcher
        .updateTrans(this.data['id'], {
          date: this.data['date'],
          from: f.value['from'],
          mineType: f.value['mineType'],
          miner: f.value['miner'],
          moneyType: f.value['moneyType'],
          quantity: f.value['quantity'],
          to: f.value['to'],
        })
        .subscribe((res) => {
          console.log(res);
          f.resetForm()
          this.reloader.setLoad(true);
        });
    }
  }
}
