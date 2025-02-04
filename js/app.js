const numInput = document.getElementById("num-input");
const romanDisplay = document.getElementById("roman-display");
const errorDisplay = document.getElementById("error-display");

const form = document.querySelector("#converter");


const romanArabArray = [
  {"M": 1000},
  {"CM": 900},
  {"D": 500},
  {"CD": 400},
  {"C": 100},
  {"XC": 90},
  {"L": 50},
  {"XL": 40},
  {"X": 10},
  {"IX": 9},
  {"V": 5},
  {"IV": 4},
  {"I": 1}
];

form.addEventListener("submit", (e) => {
  // This prevents the form from reloading the page
  e.preventDefault();
  getRomanChar();
});

function getRomanChar() {
  let decimalValue = Number(numInput.value);
  let romanNum = "";

  for(let i = 0; i < romanArabArray.length; i++) {

  }





}
