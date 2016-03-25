


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
  },
  retrieveAccountsNamed: function(name){
    var tempHolder = this.searchAccounts();
    var result = [];
    
    tempHolder.forEach(function(account){
      if (account.ownerName === name)
        result.push(account);
    });
    return result
  }

};


module.exports = Bank;