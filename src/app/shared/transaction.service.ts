import { Injectable, Inject } from '@angular/core';
import { Transaction } from './domain/transaction';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../environments/environment';
import { Payment } from './domain/payment';


@Injectable()
export class TransactionService {


  constructor(private http: HttpClient) {
  }

  public getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('transaction');
  }

  addTransaction(payment: Payment) {
     this.http.post<Payment>('payment',
     {fromAccount: payment.fromAccount.number,
      toAccount: payment.toAccount.number,
      amount: payment.amount,
      currency: payment.currency})
     .subscribe(p => {});
  }
}

