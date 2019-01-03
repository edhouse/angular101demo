import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Transaction } from '../../../shared/domain/transaction';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionService } from '../../../shared/transaction.service';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {

  displayedColumns = [
    'date',
    'fromAccount',
    'toAccount',
    'reference',
    'description',
    'amount',
    'action',
  ];

  dataSource = new MatTableDataSource();

  constructor(public dialog: MatDialog, private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  openTransaction(transaction: Transaction) {
    this.dialog.open(TransactionDetailComponent, {
      height: '350px',
      data: transaction
    });

  }
}



