var BankAccount = {
  balance: 5000,
  withdraw: function(amount) {
      this.balance = this.balance - amount;
  },
  deposit: function(amount) {
      this.balance = this.balance + amount;
  }
};
$(document).ready(function() {
var newAccount = Object.create(BankAccount);
$("form#set-up").submit(function(event) {
  event.preventDefault();
  var inputtedName = $("input#name").val();
  var inputtedBalance = parseInt($("input#initial").val());
  newAccount.name = inputtedName;
  newAccount.deposit(inputtedBalance);
  $(".balance").text(newAccount.balance);
});
$("form#run").submit(function(event) {
  event.preventDefault();
  var newBalance = parseInt($("input#deposit").val());
  newAccount.deposit(newBalance);
  $(".balance").text(newAccount.balance);
// $("#manage").unbind('submit');
});
$("form#withdraw").submit(function(event) {
  event.preventDefault();
  var newBalance = parseInt($("input#withdraw").val());
  newAccount.withdraw(newBalance);
  $(".balance").text(newAccount.balance);
});
});