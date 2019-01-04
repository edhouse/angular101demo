import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string;
  password: string;
  validLogin = true;

  constructor(private router: Router, private authService: AuthService) {
  }

  continue() {
    this.validLogin = this.authService.authenticate(this.email, this.password);
    if (this.validLogin) {
      this.router.navigate(['/auth/sms']);
    }
  }
}
