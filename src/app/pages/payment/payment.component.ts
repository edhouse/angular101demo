import {Component, OnInit} from '@angular/core';
import {Payment} from '../../shared/domain/payment';
import {PaymentService} from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  authSmsCode: boolean;
  waitingForAuthorization = false;
  paymentToAuthorize: Payment;

  constructor(private paymentService: PaymentService) {
  }

  ngOnInit() {
  }

  createPayment(event: Payment) {
    this.paymentToAuthorize = event;
    this.waitingForAuthorization = true;
  }
}
