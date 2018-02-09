import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../shared/account.service';
import {Account} from '../../../shared/domain/account';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts$: Observable<Account[]>;
  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.accounts$ = this.accountService.getMyAccounts();
  }
}
