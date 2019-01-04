import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Account } from '../../../shared/domain/account';
import { Payment } from '../../../shared/domain/payment';
import { AccountService } from '../../../shared/account.service';
import { AccountLabelPipe } from '../account-label.pipe';

@Component({
  selector: 'app-payment-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  payment = new Payment();

  @Output()
  createPaymentEvent = new EventEmitter<Payment>();

  myAccounts$: Observable<Account[]>;
  targetAccounts$: Observable<Account[]>;

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.myAccounts$ = this.accountService.getMyAccounts();
    this.targetAccounts$ = this.accountService.getMyAccounts();
  }

  continue() {
    this.payment.currency = 'CZK';
    this.createPaymentEvent.emit(this.payment);
  }

  displayFn(account?: Account): string | undefined {
    if (account == null) {
      return '';
    }

    return new AccountLabelPipe().transform(account);
  }
}
