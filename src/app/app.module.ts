import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
  MatMenuModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountListComponent } from './pages/dashboard/account-list/account-list.component';
import { TransactionTableComponent } from './pages/dashboard/transaction-table/transaction-table.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './pages/payment/form/form.component';
import { SummaryComponent } from './pages/payment/summary/summary.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentService } from './pages/payment/payment.service';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { TransactionDetailComponent } from './pages/dashboard/transaction-table/transaction-detail/transaction-detail.component';
import { AccountService } from './shared/account.service';
import { AccountLabelPipe } from './shared/account-label.pipe';
import { TransactionService } from './shared/transaction.service';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SmsComponent } from './auth/sms/sms.component';
import { AuthService } from './auth/auth.service';
import { SmsCodeDirective } from './auth/sms/sms-code.directive';
import { SmsCodePipe } from './auth/sms/sms-code.pipe';
import { AlreadyLoggedGuard } from './auth/already-logged.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BaseUrlInterceptor, API_URL } from './BaseUrlInterceptor';

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
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    NoopAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule,
    MatAutocompleteModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        component: LoginComponent,
        canActivate: [AlreadyLoggedGuard]
      },
      {
        path: 'auth/sms',
        component: SmsComponent,
        canActivate: [AlreadyLoggedGuard]
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'payment',
        component: PaymentComponent,
        canActivate: [AuthGuard]
      }, {
        path: 'transactions',
        component: TransactionsComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  providers: [PaymentService, AccountService, TransactionService, AccountLabelPipe, AuthGuard,
    AlreadyLoggedGuard, AuthService, SmsCodePipe,
    {provide: API_URL, useValue: environment.apiUrl},

    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
