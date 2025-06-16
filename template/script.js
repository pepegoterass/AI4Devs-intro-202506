// script.js

// 1. Grab references to our elements
const inputEl = document.getElementById("inputString");
const buttonEl = document.getElementById("reverseBtn");
const outputEl = document.getElementById("output");

// 2. Function that takes a string and returns the reversed string
function reverseString(str) {
  // Split the string into an array of characters,
  // reverse the array, then join back into a string
  return str.split("").reverse().join("");
}

// 3. When the button is clicked…
buttonEl.addEventListener("click", () => {
  const original = inputEl.value;
  const reversed = reverseString(original);

  // 4. Display the reversed string
  outputEl.textContent = reversed;
});
