// 'use strict';

module.exports = class Account {
    constructor(id, number, name, funds, currency) {
        this.id = id;
        this.number = number;
        this.name = name;
        this.funds = funds;
        this.currency = currency;
    }
};
