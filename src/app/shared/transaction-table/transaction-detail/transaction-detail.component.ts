import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { Transaction } from '../../domain/transaction';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public transaction: Transaction) {
  }
}
