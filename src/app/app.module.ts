import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AccountLabelPipe } from './pages/payment/account-label.pipe';
import { AccountListComponent } from './pages/dashboard/account-list/account-list.component';
import { appConfigProviders } from './app.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormComponent } from './pages/payment/form/form.component';
import { LoginComponent } from './auth/login/login.component';
import { MaterialModule } from './shared/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SmsCodeDirective } from './auth/sms/sms-code.directive';
import { SmsCodePipe } from './auth/sms/sms-code.pipe';
import { SmsComponent } from './auth/sms/sms.component';
import { SummaryComponent } from './pages/payment/summary/summary.component';
import { TransactionDetailComponent } from './pages/dashboard/transaction-table/transaction-detail/transaction-detail.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { TransactionTableComponent } from './pages/dashboard/transaction-table/transaction-table.component';
import { httpInterceptorProviders } from './http-interceptors/providers';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountListComponent,
    TransactionTableComponent,
    NavigationComponent,
    PaymentComponent,
    FormComponent,
    SummaryComponent,
    TransactionsComponent,
    TransactionDetailComponent,
    LoginComponent,
    SmsComponent,
    SmsCodeDirective,
    SmsCodePipe,
    AccountLabelPipe
  ],
  entryComponents: [
    TransactionDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    appConfigProviders,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
