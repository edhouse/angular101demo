import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from './dashboard/dashboard.module';
import { PaymentModule } from './payment/payment.module';
import { TransactionsModule } from './transactions/transactions.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    PaymentModule,
    TransactionsModule,
    NotFoundModule,
  ],
  exports: [
    DashboardModule,
    PaymentModule,
    TransactionsModule,
    NotFoundModule,
  ]
})
export class PagesModule {
}
