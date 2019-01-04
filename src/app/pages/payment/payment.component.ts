import { Component } from '@angular/core';
import { Payment } from '../../shared/domain/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  waitingForAuthorization = false;
  paymentToAuthorize: Payment;

  createPayment(event: Payment) {
    this.paymentToAuthorize = event;
    this.waitingForAuthorization = true;
  }
}
