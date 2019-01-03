import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../../shared/domain/payment';
import { TransactionService } from '../../shared/transaction.service';
import { Transaction } from '../../shared/domain/transaction';

@Injectable()
export class PaymentService {

  constructor(private transactionService: TransactionService) {
  }


  authorize(payment: Payment): Observable<Transaction> {
    return this.transactionService.addTransaction(payment);
  }
}
