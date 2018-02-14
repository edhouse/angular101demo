export class Transaction {
  id: number;
  date: Date;
  fromAccount: string;
  toAccount: string;
  description: string;
  amount: number;
  income: boolean;
  currency: string;
}
