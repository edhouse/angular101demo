import { Injectable, Inject } from '@angular/core';
import { Account } from './domain/account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) {
  }

  public getMyAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>('account');
  }
}
