


var Bank = function(name){
  this.name = name;
  this.accountsHolder = [];
};

Bank.prototype = {
  addAccount: function(account){
    this.accountsHolder.push(account);
  }
};


module.exports = Bank;