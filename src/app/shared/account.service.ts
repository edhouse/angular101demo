import { Injectable, Inject } from '@angular/core';
import { Account } from './domain/account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../../environments/environment';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {
  }

  public getMyAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>('account');
  }
}
