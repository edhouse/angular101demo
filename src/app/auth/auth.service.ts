import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private DEMO_EMAIL = 'jan@novak.cz';
  private DEMO_PASSWORD = 'novak123';
  private DEMO_SMS_CODE = 'ABCDEFG';
  private smsValid = true;

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    if (sessionStorage.getItem('currentUser') != null && sessionStorage.getItem('waitingForSms') == null) {
      this.loggedIn.next(true);
    }
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) { }

  authenticate(email: string, password: string): boolean {
    if (this.DEMO_EMAIL === email && this.DEMO_PASSWORD === password) {
      sessionStorage.setItem('currentUser', email);
      sessionStorage.setItem('waitingForSms', '');
      return true;
    }
    return false;
  }

  validateSmsCode(smsCode: string): boolean {
    this.smsValid = this.DEMO_SMS_CODE === smsCode;
    if (this.smsValid) {
      sessionStorage.removeItem('waitingForSms');
      this.loggedIn.next(true);
    }
    return this.smsValid;
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/auth']);
    sessionStorage.clear();
  }
}
