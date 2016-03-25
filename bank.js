


var Bank = function(name){
  this.name = name;
  this.accountsHolder = [];
};

Bank.prototype = {
  addAccount: function(account){
    this.accountsHolder.push(account);
  },
  searchAccounts: function(){
    var tempHolder = [];
    this.accountsHolder.forEach(function(account){
      tempHolder.push(account);
    });
    return tempHolder;
  }
};


module.exports = Bank;