// Get DOM elements
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const boxA = document.getElementById("boxA");
const boxB = document.getElementById("boxB");
const swapSound = document.getElementById("swapSound");

// Initialize boxes with input values
boxA.textContent = inputA.value;
boxB.textContent = inputB.value;

function swapVariables() {
  // Get current input values
  let a = inputA.value;
  let b = inputB.value;

  // Log initial state
  console.log("Before: a =", a, "b =", b);

  // Trigger animation
  boxA.classList.add("swapped");
  boxB.classList.add("swapped-back");

  // Play sound
  swapSound.play();

  // Perform swap after animation starts
  setTimeout(() => {
    // Swap values
    [a, b] = [b, a];
    
    // Update input fields and boxes
    inputA.value = a;
    inputB.value = b;
    boxA.textContent = a;
    boxB.textContent = b;

    // Log final state
    console.log("After: a =", a, "b =", b);

    // Reset animation classes
    setTimeout(() => {
      boxA.classList.remove("swapped");
      boxB.classList.remove("swapped-back");
    }, 1000);
  }, 500);
} 

