var bankAccount = {
  balance:500,
  withdraw:function(amount){
    this.balance = this.balance-amount;
  },
  deposit:function(amount){
    this.balance = this.balance+amount;
  }
};
$(document).ready(function(){
  var newAccount = Object.create(BankAccount);

