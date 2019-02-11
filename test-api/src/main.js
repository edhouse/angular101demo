const express = require('express');
const bodyParser = require('body-parser');

const Account = require('./domain/account.js');
const Transaction = require('./domain/transaction.js');

const hostname = '127.0.0.1';
const port = 9898;

const accounts = [
    new Account(1, '12346789936', 'Extra Flex', 10005.525, 'CZK'),
    new Account(2, '12346789879', 'Extra Saving', 1000000.150, 'CZK'),
];

const transactions = [
    new Transaction('44455566677', '12346789936', 10000, 'CZK', null, 'wage'),
    new Transaction('12346789936', '99988877766', 123, 'CZK', '190111123', 'angular books order'),
];

const app = express();
const parser = bodyParser.json();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/account', (req, res) => {
    res.send(accounts);
});

app.get('/api/transaction', (req, res) => {
    res.send(transactions);
});

app.post('/api/payment', parser, (req, res) => {
    const transaction = Transaction.createFromPayment(req.body);
    transactions.push(transaction);
    res.send(transaction);
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
