import {Component, Input} from '@angular/core';
import {Payment} from '../../../shared/domain/payment';
import {PaymentService} from '../payment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  @Input()
  paymentToAuthorize: Payment;

  authorizationCode: String;

  constructor(private router: Router, private paymentService: PaymentService) {
  }

  authorize() {
    this.paymentService.authorize(this.paymentToAuthorize);
    this.router.navigate(['/transactions']);
  }

}
