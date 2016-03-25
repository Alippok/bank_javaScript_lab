var assert = require('chai').assert;
var Account = require('../account.js');


var account1 = new Account("Draco Malfoy", 7500, 'wizard');
var account2 = new Account("Hagrid", 2300, 'ministerial');
var account3 = new Account("Hagrid", 140, 'muggle')

describe("Account", function(){

  it("should have an owner name", function(){
    assert.equal("Draco Malfoy", account1.ownerName);
  });

  it("should have a balance", function(){
    assert.equal(2300, account2.balance);
  });

  it("should have a type", function(){
    assert.equal("muggle", account3.type);
  });


});