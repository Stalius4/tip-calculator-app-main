let billAmount = document.querySelector("#bill-amount");
let totaAmountPerPerson = document.querySelector("#total-per-person");
let tip5 = document.querySelector("#tip-5");
let totalTipPerPerson = document.querySelector("#total-tip-per-person");
let numberOfPeople = document.querySelector("#numb-of-people");



function myFunction(percentage) {
    var x = parseInt(billAmount.value) ; 
    let people = parseInt(numberOfPeople.value);
    let tipAmount = x *percentage / 100;
    let totalAmount = x + tipAmount
    totalTipPerPerson.innerHTML = Math.round(x *percentage / 100 / people);
    totaAmountPerPerson.innerHTML =Math.round(totalAmount / people);
  }

  function reset(){
  billAmount.value = 0;
  numberOfPeople.value = 1;
  totaAmountPerPerson.innerHTML = 0;
  totalTipPerPerson.innerHTML = 0;

  }

