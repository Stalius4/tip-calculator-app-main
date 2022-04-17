//const allInputs = document.querySelectorAll("input")

//inputs
const inputCash = document.querySelector("#bill-amount");
const InputNumOfPeople = document.querySelector("#numb-of-people");
const inputCustom = document.querySelector(".custom-number");

// display
const displayZeroCash = document.querySelector("#zero-top"); // zero error for cash
const displayZeroNumOfPeople = document.querySelector("#zero-mid"); // zero error for number of people
const displayCashPerPerson = document.querySelector("#total-per-person");
const displayTipPerPerson = document.querySelector("#total-tip-per-person");

const customBtn = document.querySelector("#custom");
const tipSelectBtn = document.querySelectorAll(".tip");

// display 0.00 in Total tip amount and total per person
const displayZero = () => {
  displayCashPerPerson.innerHTML = "0.00";
  displayTipPerPerson.innerHTML = "0.00";
};

tipSelectBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {

    let cashValue = parseInt(inputCash.value);
    let people = parseInt(InputNumOfPeople.value);
    let tipAmount = (cashValue * e.target.value) / 100;
    let totalAmount = cashValue + tipAmount;
    let tipResult 
    let cashResult
    displayTipPerPerson.innerHTML = Math.round((cashValue * e.target.value) / 100 / people).toFixed(2);
    displayCashPerPerson.innerHTML = Math.round(totalAmount / people).toFixed(2);

    if (isNaN(cashValue) || cashValue == 0 || people == 0) {
      displayZero();
    }
  })
);

// function myFunction(percentage) {
//     var x = parseInt(inputCash.value);
//     let people = parseInt(InputNumOfPeople.value);
//     let tipAmount = (x * percentage) / 100;
//     let totalAmount = x + tipAmount;
//     displayTipPerPerson.innerHTML = Math.round(
//         (x * percentage) / 100 / people
//     ).toFixed(2);
//     displayCashPerPerson.innerHTML = Math.round(totalAmount / people).toFixed(2);
//     // customInputs.style.display ="none";
//     // customBtn.style.display ="grid";
//     // customInputs.value = "0"
//     if (
//         isNaN(inputCash.value) ||
//         inputCash.value == 0 ||
//         InputNumOfPeople.value == 0
//     ) {
//         displayZero()

//     }
// }

//Checking if bill amount is not NaN or 0 if yes, shows message with error
inputCash.addEventListener("input", () => {
  if (isNaN(inputCash.value) || inputCash.value == 0) {
    inputCash.style.border = "orangered solid 2px";
    displayZeroCash.style.display = "flex";
    displayZero();
  } else if (inputCash > 0 && InputNumOfPeople == 0) {
    displayZero();
  } else if (inputCash > 0 && inputCustom.value == 0) {
    displayZero();
    // } else if (isNaN(displayTipPerPerson.value) || displayTipPerPerson == 0) {
    //     displayTipPerPerson.innerHTML = "0.00";
    //     displayCashPerPerson.innerHTML = "0.00";
  } else {
    inputCash.style.border = "hsl(186, 14%, 43%) solid 2px";
    displayZeroCash.style.display = "none";
    const customNumber = document.querySelector("#custom1");
    let customNum = customNumber.value;
    // myFunction(customNum)
  }
});

// Checking if number of people input is not NaN or 0 if yes, shows message with error
InputNumOfPeople.addEventListener("input", () => {
  if (isNaN(InputNumOfPeople.value) || InputNumOfPeople.value == 0) {
    InputNumOfPeople.style.border = "orangered solid 2px";
    displayZeroNumOfPeople.style.display = "flex";
    displayZero();
    // } else if (isNaN(displayTipPerPerson.value) || displayTipPerPerson == 0) {
    //     displayTipPerPerson.innerHTML = "0.00";
    //     displayCashPerPerson.innerHTML = "0.00";
  } else {
    InputNumOfPeople.style.border = "hsl(186, 14%, 43%) solid 2px";
    displayZeroNumOfPeople.style.display = "none";
    const customNumber = document.querySelector("#custom1");
    let customNum = customNumber.value;
    myFunction(customNum);
  }
});

// On click function to calculate tips

function myFunction1() {
  const customNumber = document.querySelector("#custom1");
  let customNum = customNumber.value;
  var x = parseInt(inputCash.value);
  let people = parseInt(InputNumOfPeople.value);
  let tipAmount = (x * customNum) / 100;
  let totalAmount = x + tipAmount;
  displayTipPerPerson.innerHTML = Math.round(
    (x * customNum) / 100 / people
  ).toFixed(2);
  displayCashPerPerson.innerHTML = Math.round(totalAmount / people).toFixed(2);
  if (isNaN(inputCustom.value)) {
    displayZero();
  }
}

function reset() {
  inputCash.value = "";
  InputNumOfPeople.value = "";
  displayCashPerPerson.innerHTML = "0.00";
  displayTipPerPerson.innerHTML = "0.00";
  inputCash.style.border = "hsl(186, 14%, 43%) solid 2px";
  displayZeroCash.style.display = "none";
  InputNumOfPeople.style.border = "hsl(186, 14%, 43%) solid 2px";
  displayZeroNumOfPeople.style.display = "none";
  inputCustom.style.display = "none";
  customBtn.style.display = "grid";
  inputCustom.value = "0";
}

function customButton() {
  customBtn.style.display = "none";
  inputCustom.style.display = "grid";
}
