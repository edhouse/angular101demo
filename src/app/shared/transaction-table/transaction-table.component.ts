import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { Transaction } from '../domain/transaction';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionService } from '../transaction.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss'],
  providers: [DatePipe]
})
export class TransactionTableComponent implements OnInit {

  dateFormat = 'dd-MM-yyyy';

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

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private transactionService: TransactionService, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data: Transaction, filter: string) =>
      !filter
      || (data.fromAccount && data.fromAccount.toLowerCase().includes(filter))
      || (data.toAccount && data.toAccount.toLowerCase().includes(filter))
      || (data.reference && data.reference.toLowerCase().includes(filter))
      || (data.description && data.description.toLowerCase().includes(filter))
      || (data.amount && data.amount.toString().includes(filter))
      || (data.date && this.datePipe.transform(data.date, this.dateFormat).includes(filter));

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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
