import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountService } from '../../../shared/account.service';
import { Account } from '../../../shared/domain/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  accounts$: Observable<Account[]>;

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.accounts$ = this.accountService.getMyAccounts();
  }
}
