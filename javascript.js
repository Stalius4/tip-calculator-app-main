//inputs
const inputCash = document.querySelector("#bill-amount");
const InputNumOfPeople = document.querySelector("#numb-of-people");
const inputCustom = document.querySelector(".custom-number");

// display
const displayZeroCash = document.querySelector("#zero-top"); // zero error for cash
const displayZeroNumOfPeople = document.querySelector("#zero-mid"); // zero error for number of people
const displayCashPerPerson = document.querySelector("#total-per-person");
const displayTipPerPerson = document.querySelector("#total-tip-per-person");
//Buttons
const customBtn = document.querySelector("#custom");
const tipSelectBtn = document.querySelectorAll(".tip");


//-------------Functions--------------------------------------------------
// display 0.00 in Total tip amount and total per person
const displayZero = () => {
  displayCashPerPerson.innerHTML = "0.00";
  displayTipPerPerson.innerHTML = "0.00";
};

//select all tip buttons
tipSelectBtn.forEach((btn) => btn.addEventListener("click", (e) => {
    tipFormula(e.target.value)
  })
);

//Custom input tip calculator
inputCustom.addEventListener("input", () =>{
    tipFormula(inputCustom.value)
    })

function tipFormula(percentage) {
    var cashValue = parseInt(inputCash.value);
    let people = parseInt(InputNumOfPeople.value);
    let tipAmount = (cashValue * percentage) / 100;
    let totalAmount = cashValue + tipAmount;
    displayTipPerPerson.innerHTML = Math.round((cashValue * percentage) / 100 / people).toFixed(2);
    displayCashPerPerson.innerHTML = Math.round(totalAmount / people).toFixed(2);
    if (isNaN(inputCash.value) || inputCash.value == 0 || InputNumOfPeople.value == 0) {
        displayZero()

    }
}

//Checking if bill amount is not NaN or 0 if yes, shows message with error
inputCash.addEventListener("input", () => {
    tipFormula(inputCash.value)
  if (isNaN(inputCash.value) || inputCash.value == 0) {
    inputCash.style.border = "orangered solid 2px";
    displayZeroCash.style.display = "flex";
    displayZero();
  } else if (inputCash > 0 && InputNumOfPeople == 0) {
    displayZero();
  } else if (inputCash > 0 && inputCustom.value == 0) {
    displayZero();
  } else {
    inputCash.style.border = "hsl(186, 14%, 43%) solid 2px";
    displayZeroCash.style.display = "none";
  }
});


// Checking if number of people input is not NaN or 0 if yes, shows message with error
InputNumOfPeople.addEventListener("input", () => {
  if (isNaN(InputNumOfPeople.value) || InputNumOfPeople.value == 0) {
    InputNumOfPeople.style.border = "orangered solid 2px";
    displayZeroNumOfPeople.style.display = "flex";
    displayZero();
  } else {
    InputNumOfPeople.style.border = "hsl(186, 14%, 43%) solid 2px";
    displayZeroNumOfPeople.style.display = "none";
    const customNumber = document.querySelector("#custom1");
    let customNum = customNumber.value;
    tipFormula(customNum);
  }
});

function reset() {
  inputCash.value = "";
  InputNumOfPeople.value = "";
  displayZero();
  inputCash.style.border = "hsl(186, 14%, 43%) solid 2px";
  displayZeroCash.style.display = "none";
  InputNumOfPeople.style.border = "hsl(186, 14%, 43%) solid 2px";
  displayZeroNumOfPeople.style.display = "none";
  inputCustom.style.display = "none";
  customBtn.style.display = "grid";
  inputCustom.value = "0";
}

customBtn.addEventListener("click", () => {
  customBtn.style.display = "none";
  inputCustom.style.display = "grid";
})
