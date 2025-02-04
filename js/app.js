const numInput = document.getElementById("num-input");
const romanDisplay = document.getElementById("roman-display");
const errorDisplay = document.getElementById("error-display");

const btn = document.querySelector("button");
const form = document.getElementById("converter");


const arabNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanNums = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

numInput.addEventListener("change", reset);

form.addEventListener("submit", (e) => {
  // This prevents the form from reloading the page
  e.preventDefault();
  const romanCharacters = getRomanChar(numInput.value);
  displayRoman(romanCharacters);
});



function reset() {
  romanDisplay.classList.add("hidden");
}

function getRomanChar() {
  let decimalValue = Number(numInput.value);
  let romanNum = "";

  for(let i = 0; i < arabNums.length; i++) {
    while(decimalValue >= arabNums[i]) {
      romanNum += romanNums[i];
      decimalValue -= arabNums[i];
    }
  }
  return romanNum;
}

function displayRoman(roman) {
  romanDisplay.classList.remove("hidden");
  romanDisplay.textContent = roman;
}


