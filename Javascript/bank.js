var bankAccount = {
  balance:500,
  withdraw:function(amount){
    this.balance = this.balance-amount;
  },
  deposit:function(amount){
    this.balance = this.balance+amount;
  }
};
