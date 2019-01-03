import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URL } from '../app.config';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor(@Inject(API_URL) private apiUrl: string) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiReq = req.clone({url: `${this.apiUrl}/${req.url}`});

    return next.handle(apiReq);
  }
}
