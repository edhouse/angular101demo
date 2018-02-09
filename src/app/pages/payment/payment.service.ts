import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Payment} from '../../shared/domain/payment';
import {TransactionService} from '../../shared/transaction.service';

@Injectable()
export class PaymentService {

  constructor(private transactionService: TransactionService) {
  }


  authorize(payment: Payment) {
    this.transactionService.addTransaction(payment);
  }
}
