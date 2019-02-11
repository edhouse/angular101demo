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

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    if (sessionStorage.getItem('currentUser') != null && sessionStorage.getItem('waitingForSms') == null) {
      this.loggedIn.next(true);
    }
    return this.loggedIn.asObservable();
  }

  private _redirectUrl;

  private set redirectUrl(redirectUrl: string) {
    if (redirectUrl) {
      this._redirectUrl = redirectUrl;
    }
  }

  private get redirectUrl(): string {
    const redirectUrl = this._redirectUrl;
    if (redirectUrl) {
      this._redirectUrl = null;
      return redirectUrl;
    }
    return '/dashboard';
  }

  constructor(private router: Router) {
  }

  navigateToLogin(fromUrl: string) {
    this.redirectUrl = fromUrl;
    this.router.navigate(['/auth']);
  }

  authenticate(email: string, password: string): boolean {
    if (this.DEMO_EMAIL === email && this.DEMO_PASSWORD === password) {
      sessionStorage.setItem('currentUser', email);
      sessionStorage.setItem('waitingForSms', '');
      this.router.navigate(['/auth/sms']);
      return true;
    }
    return false;
  }

  validateSmsCode(smsCode: string) {
    if (this.DEMO_SMS_CODE === smsCode) {
      sessionStorage.removeItem('waitingForSms');
      this.loggedIn.next(true);
      this.router.navigate([this.redirectUrl]);
      return;
    }
    this.router.navigate(['/auth']);
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/auth']);
    sessionStorage.clear();
  }
}
