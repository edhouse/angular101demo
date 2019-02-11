const uuid = require('uuid4');

module.exports = class Transaction {
    constructor(fromAccount, toAccount,amount,currency, reference, description) {
        this.uuid = uuid();
        this.date = new Date();
        this.fromAccount = fromAccount;
        this.toAccount = toAccount;
        this.amount = amount;
        this.currency = currency;
        this.reference = reference;
        this.description = description;
    }

    static createFromPayment(payment) {
        return new Transaction(payment.fromAccount, payment.toAccount, payment.amount, payment.currency,
            payment.reference, payment.description);
    }
};
