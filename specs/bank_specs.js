var assert = require('chai').assert;
var Bank = require('../bank.js');
var Account = require('../account.js')

var bank1 = new Bank("Gringotts");
var account1 = new Account("Draco Malfoy", 7500, 'wizard');
var account2 = new Account("Hagrid", 2300, 'ministerial');
var account3 = new Account("Hagrid", 140, 'muggle')
var account4 = new Account("Harry Potter", 250, 'muggle')
var account5 = new Account("Hermoine Grainger", 500, 'muggle')
var account6 = new Account("Mr Weasley", 3000, 'ministerial')

describe("Bank", function(){
  
  it("should have a name", function(){
    assert.equal("Gringotts", bank1.name);
  });

  it("should have an accounts holder", function(){
    assert.deepEqual([], bank1.accountsHolder);
  });

  it("should be able to add an account", function(){
    bank1.addAccount(account1)
    assert.deepEqual([account1], bank1.accountsHolder)
  });

  it("should be able to hold multiple accounts", function(){
    var bank2 = new Bank("Velmstaus")
    bank2.addAccount(account1);
    bank2.addAccount(account2);
    bank2.addAccount(account3);
    bank2.addAccount(account4);
    bank2.addAccount(account5);
    bank2.addAccount(account6);
    assert.deepEqual([account1, account2, account3, account4, account5, account6], bank2.accountsHolder);
  });



});