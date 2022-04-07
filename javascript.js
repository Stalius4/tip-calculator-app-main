const billAmount = document.querySelector("#bill-amount");
const totaAmountPerPerson = document.querySelector("#total-per-person");
const totalTipPerPerson = document.querySelector("#total-tip-per-person");
const numberOfPeople = document.querySelector("#numb-of-people");
const zero = document.querySelector("#zero-top")
const zeroMid = document.querySelector("#zero-mid")
const inputs = document.querySelectorAll(".input")





// Checking if bill amount is not NaN or 0 if yes, shows message with error
billAmount.addEventListener("input",() => {  
    if(isNaN(billAmount.value)|| billAmount.value == 0 ){
        billAmount.style.border = "orangered solid 2px";
        zero.style.display = "flex";
        totaAmountPerPerson.innerHTML = "0.00";
        totalTipPerPerson.innerHTML = "0.00";
    }else{
        billAmount.style.border = "hsl(186, 14%, 43%) solid 2px";
        zero.style.display = "none";
    }})



// Checking if number of people input is not NaN or 0 if yes, shows message with error    
numberOfPeople.addEventListener("input",() => {  
    if(isNaN(numberOfPeople.value)|| numberOfPeople.value == 0 ){
         numberOfPeople.style.border = "orangered solid 2px";
         zeroMid.style.display = "flex";
        totaAmountPerPerson.innerHTML = "0.00";
        totalTipPerPerson.innerHTML = "0.00";
    }else{
        numberOfPeople.style.border = "hsl(186, 14%, 43%) solid 2px";
        zeroMid.style.display = "none";
     }})

// On click functio to calculate tips 
function myFunction(percentage) {
    var x = parseInt(billAmount.value) ; 
    let people = parseInt(numberOfPeople.value);
    let tipAmount = x *percentage / 100;
    let totalAmount = x + tipAmount
    totalTipPerPerson.innerHTML = Math.round(x *percentage / 100 / people);
    totaAmountPerPerson.innerHTML =Math.round(totalAmount / people);
    if(isNaN(billAmount.value)|| billAmount.value == 0 ){
        totaAmountPerPerson.innerHTML = "0.00";
        totalTipPerPerson.innerHTML = "0.00";
    }
  }

  function reset(){
  billAmount.value = "";
  numberOfPeople.value = "";
  totaAmountPerPerson.innerHTML = "0.00";
  totalTipPerPerson.innerHTML = "0.00";
  billAmount.style.border = "hsl(186, 14%, 43%) solid 2px";
  zero.style.display = "none";
  numberOfPeople.style.border = "hsl(186, 14%, 43%) solid 2px";
  zeroMid.style.display = "none";
  }

