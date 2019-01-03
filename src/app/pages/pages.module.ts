import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from './dashboard/dashboard.module';
import { PaymentModule } from './payment/payment.module';
import { TransactionsModule } from './transactions/transactions.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    PaymentModule,
    TransactionsModule,
  ],
  exports: [
    DashboardModule,
    PaymentModule,
    TransactionsModule,
  ]
})
export class PagesModule {
}
