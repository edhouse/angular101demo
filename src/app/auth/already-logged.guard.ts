import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { AuthModule } from './auth.module';

@Injectable({
  providedIn: AuthModule
})
export class AlreadyLoggedGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLoggedIn
      .pipe(
        take(1),
        map((isLoggedIn: boolean) => {
          if (isLoggedIn) {
            this.router.navigate(['/dashboard']);
            return false;
          }
          return true;
        })
      );
  }
}
