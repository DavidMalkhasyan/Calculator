const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const resetbtn = document.getElementById("reset");
const equalbtn = document.getElementById("submit");
const display = document.getElementById("display");

let currentInput = "";

numbers.forEach(button => {
  button.addEventListener("click", function () {
    currentInput += button.textContent;
    display.value = currentInput;
  });
});

operators.forEach(button => {
  button.addEventListener("click", function () {
    currentInput += ` ${button.textContent} `;
    display.value = currentInput;
  });
});

resetbtn.addEventListener("click", function () {
  currentInput = "";
  display.value = "";
});

equalbtn.addEventListener("click", function () {
  try {
    currentInput = eval(currentInput).toString(); 
    display.value = currentInput;
  } catch (error) {
    display.value = "Error"; 
    currentInput = "";
  }
});
