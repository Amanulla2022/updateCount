document.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  const numberDisplay = document.getElementById("count-display");
  const updateHeading = document.getElementById("heading");
  const container = document.getElementById("container");

  document.getElementById("inc").addEventListener("click", function () {
    count++;
    updateHeading.textContent = "You are Increasing!!!";
    container.style.borderColor = "green";
    updateDisplay();
  });

  document.getElementById("dec").addEventListener("click", function () {
    count--;
    updateHeading.textContent = "You are Decreasing!!!";
    container.style.borderColor = "red";
    updateDisplay();
  });

  document.getElementById("res").addEventListener("click", function () {
    count = 0;
    updateHeading.textContent = "You are Reseted to 0 !!!";
    container.style.borderColor = "black";
    updateDisplay();
  });

  function updateDisplay() {
    numberDisplay.textContent = count;
  }
});
