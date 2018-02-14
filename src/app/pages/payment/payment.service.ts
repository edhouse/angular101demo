import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Payment} from '../../shared/domain/payment';
import {TransactionService} from '../../shared/transaction.service';

@Injectable()
export class PaymentService {

  constructor(private transactionService: TransactionService) {
  }


  authorize(payment: Payment): Observable<Payment> {
    return this.transactionService.addTransaction(payment);
  }
}
