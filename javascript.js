const billAmount = document.querySelector("#bill-amount");
const totaAmountPerPerson = document.querySelector("#total-per-person");
const totalTipPerPerson = document.querySelector("#total-tip-per-person");
const numberOfPeople = document.querySelector("#numb-of-people");
const zero = document.querySelector("#zero-top")
const zeroMid = document.querySelector("#zero-mid")
function myFunction(percentage) {
    //1. take value from #bill amount and change it to number with parseInt()
    let bill = parseInt(billAmount.value,) ; 
    let people = parseInt(numberOfPeople.value);
    let tipAmount = bill *percentage / 100;
    let totalAmount = bill + tipAmount;
   //2 if bill amount has no value  check with isNaN or value of 0
    if(isNaN(bill) || bill == 0 && isNaN(people) || people ==0){
    // Show message It cannot be zero and red border
        billAmount.style.border = "orangered solid 2px";
        zero.style.display = "flex";
        totalTipPerPerson.innerHTML = "0.00"
        zeroMid.style.display = "flex";
        totalTipPerPerson.innerHTML = "0.00";
        numberOfPeople.style.border = "orangered solid 2px";
    
        
    
    }else if(!isNaN(bill) || bill > 0 )
    {billAmount.style.border = "hsl(186, 14%, 43%) solid 2px";
        zero.style.display = "none";
        totalTipPerPerson.innerHTML = (bill *percentage / 100 / people).toFixed(2);
        totaAmountPerPerson.innerHTML =(totalAmount / people).toFixed(2);
    }else if(!isNaN(people) || people > 0)
    {numberOfPeople.style.border = "hsl(186, 14%, 43%) solid 2px";
        zeroMid.style.display = "none";
        totalTipPerPerson.innerHTML = (bill *percentage / 100 / people).toFixed(2);
        totaAmountPerPerson.innerHTML =(totalAmount / people).toFixed(2);
    }


    
    
    
  }

  function reset(){
  billAmount.value = "";
  numberOfPeople.value = "";
  totaAmountPerPerson.innerHTML = "0.00";
  totalTipPerPerson.innerHTML = "0.00";

  }
//   var input = document.getElementById('billAmount');

//   if(input.value.length == 0)
//       input.value = "Empty";

//       console.log(input)
