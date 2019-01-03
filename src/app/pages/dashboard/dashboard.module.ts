import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { AccountListComponent } from './account-list/account-list.component';
import { MaterialModule } from '../../shared/material.module';
import { TransactionTableModule } from '../../shared/transaction-table/transaction-table.module';

@NgModule({
  declarations: [
    AccountListComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TransactionTableModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule {
}
