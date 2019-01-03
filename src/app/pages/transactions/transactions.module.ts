import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsComponent } from './transactions.component';
import { MaterialModule } from '../../shared/material.module';
import { TransactionTableModule } from '../../shared/transaction-table/transaction-table.module';

@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TransactionTableModule,
  ],
  exports: [
    TransactionsComponent
  ]
})
export class TransactionsModule {
}
