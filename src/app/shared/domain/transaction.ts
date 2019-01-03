export class Transaction {
  uuid: number;
  date: Date;
  fromAccount: string;
  toAccount: string;
  amount: number;
  currency: string;
  reference: string;
  description: string;
}
