import { Account } from './account';

export class Payment {
  fromAccount: Account;
  toAccount: Account;
  amount: number;
  currency: string;
  reference: string;
  description: string;
}
