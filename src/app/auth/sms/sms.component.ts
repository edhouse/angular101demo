import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent {

  smsCode: string;

  constructor(private authService: AuthService) {
  }

  login() {
    this.authService.validateSmsCode(this.smsCode);
  }
}
