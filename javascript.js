const billAmount = document.querySelector("#bill-amount");
const totaAmountPerPerson = document.querySelector("#total-per-person");
const totalTipPerPerson = document.querySelector("#total-tip-per-person");
const numberOfPeople = document.querySelector("#numb-of-people");
const zero = document.querySelector("#zero-top")
const zeroNumOfPeople = document.querySelector("#zero-mid")
const inputs = document.querySelectorAll(".input")
let customBtn = document.querySelector("#custom")
let customInput = document.querySelector("#custom1")
console.log(customInput)



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
         zeroNumOfPeople.style.display = "flex";
        totaAmountPerPerson.innerHTML = "0.00";
        totalTipPerPerson.innerHTML = "0.00";
    }else{
        numberOfPeople.style.border = "hsl(186, 14%, 43%) solid 2px";
        zeroNumOfPeople.style.display = "none";
     }})
 
// On click functio to calculate tips 
function myFunction(percentage) {
    var x = parseInt(billAmount.value) ; 
    let people = parseInt(numberOfPeople.value);
    let tipAmount = x *percentage / 100;
    let totalAmount = x + tipAmount
    totalTipPerPerson.innerHTML = Math.round(x *percentage / 100 / people).toFixed(2);
    totaAmountPerPerson.innerHTML =Math.round(totalAmount / people).toFixed(2);
    if(isNaN(billAmount.value)|| billAmount.value == 0 || numberOfPeople.value == 0){
        totaAmountPerPerson.innerHTML = "0.00";
        totalTipPerPerson.innerHTML = "0.00";
    }
  }

  function myFunction1() {
    const customNumber = document.querySelector("#custom1")
    let customNum = customNumber.value
    var x = parseInt(billAmount.value) ; 
    let people = parseInt(numberOfPeople.value);
    let tipAmount = x *customNum / 100;
    let totalAmount = x + tipAmount
    totalTipPerPerson.innerHTML = Math.round(x *customNum / 100 / people).toFixed(2);
    totaAmountPerPerson.innerHTML =Math.round(totalAmount / people).toFixed(2);
  }

  function reset(){
  billAmount.value = "";
  numberOfPeople.value = "";
  totaAmountPerPerson.innerHTML = "0.00";
  totalTipPerPerson.innerHTML = "0.00";
  billAmount.style.border = "hsl(186, 14%, 43%) solid 2px";
  zero.style.display = "none";
  numberOfPeople.style.border = "hsl(186, 14%, 43%) solid 2px";
  zeroNumOfPeople.style.display = "none";
  }


  function customButton(){
    customBtn = customBtn.remove()
    let customInput = document.querySelector("#select-tips")
    customInput.insertAdjacentHTML("beforeend", ` <input type="number" placeholder="0" class="custom-number" id="custom1" oninput="myFunction1()"></input>`); 
    
  }

  

// customInput.addEventListener("input",() => {  
//     let customInput = customInput.value;
//     console.log("sds")
//     var x = parseInt(billAmount.value) ; 
//     let people = parseInt(numberOfPeople.value);
//     let tipAmount = x *customInput / 100;
//     let totalAmount = x + tipAmount
//     totalTipPerPerson.innerHTML = Math.round(x *customInput / 100 / people).toFixed(2);
//     totaAmountPerPerson.innerHTML =Math.round(totalAmount / people).toFixed(2);
//     if(isNaN(billAmount.value)|| billAmount.value == 0 || numberOfPeople.value == 0){
//         totaAmountPerPerson.innerHTML = "0.00";
//         totalTipPerPerson.innerHTML = "0.00";
//     }})

