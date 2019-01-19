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
$("form#set-up").submit(function(event){
  event.preventDefault();
  var inputtedName = $("input#name").val();
  var inputtedBalance = parseInt$("input#initial").val();
  newAccount.name = inputtedName;
  newAccount.deposit(inputtedBalance);
  $(".balance").text(newAccount.balance);
});
$("form#run").submit(function(event){

}

