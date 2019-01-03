import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionTableComponent } from './transaction-table.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    TransactionDetailComponent,
    TransactionTableComponent,
  ],
  entryComponents: [
    TransactionDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    TransactionTableComponent
  ]
})
export class TransactionTableModule {
}
