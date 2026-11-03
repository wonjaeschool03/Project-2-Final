let steps1 = 0;
let steps2 = 0;

let buttons1 = document.querySelectorAll(".button1");
let buttons2 = document.querySelectorAll(".button2");

let count1 = document.getElementById("count1");
let count2 = document.getElementById("count2");

buttons1.forEach(function(button) {
  button.addEventListener("click", function() {
    if (steps1 < 4) {
      steps1 = steps1 + 1;
      count1.textContent = steps1;
    }
  });
});

buttons2.forEach(function(button) {
  button.addEventListener("click", function() {
    if (steps2 < 4) {
      steps2 = steps2 + 1;
      count2.textContent = steps2;
    }
  });
});

let resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function() {
  steps1 = 0;
  steps2 = 0;

  count1.textContent = steps1;
  count2.textContent = steps2;
});