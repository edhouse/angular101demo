import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent {

  smsCode: string;
  invalidLogin = false;

  constructor(private router: Router, private authService: AuthService) {
  }

  login() {
    this.invalidLogin = this.authService.validateSmsCode(this.smsCode);
    if (this.invalidLogin) {
      this.router.navigate(['/dashboard']);
      return;
    }
    this.router.navigate(['/auth']);
  }
}
