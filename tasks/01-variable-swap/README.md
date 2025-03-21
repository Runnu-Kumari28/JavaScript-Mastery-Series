# Task 1: Dynamic Variable Swap

Swap any two values entered by the user, with animation and sound effects!


## How It Works
1. **Setup**: Users input values in two text fields (defaults: `1` and `2`).
2. **Trigger**: Clicking "Swap!" reads the current input values.
3. **Animation**: Boxes move with a 1-second CSS `transition`.
4. **Sound**: A "transition-sound" plays via the Audio API.
5. **Swap**: After 500ms, values are swapped using destructuring, updating inputs and boxes.
6. **Reset**: Boxes return to original positions after 1 second.

### Code Execution
```javascript
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
function swapVariables() {
  let a = inputA.value;                     // Get user input
  let b = inputB.value;
  console.log("Before: a =", a, "b =", b);  // Log initial state
  boxA.classList.add("swapped");            // Start animation
  swapSound.play();                         // Play sound
  setTimeout(() => {
    [a, b] = [b, a];                        // Swap values
    inputA.value = a;                       // Update inputs
    inputB.value = b;
    boxA.textContent = a;                   // Update boxes
    boxB.textContent = b;
    console.log("After: a =", a, "b =", b); // Log final state
  }, 500);
}