const h2Instructions = document.querySelector("#instructions");
const divContent = document.querySelector("#content");
const divOutput = document.querySelector("#output");
const divFunction = document.querySelector("#function");

h2Instructions.textContent = `Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.`;

let x = 3;
let n = 3;
divContent.textContent = `The test numbers are: ${x} as the starting given number of the output array and ${n} as the length of the output array. `;

let squares = (startNumber, arrayLength) => {
  if (arrayLength <= 0) return [];
  return [...Array(arrayLength)].map((_, i) => startNumber ** (2 ** i));
};
divOutput.textContent = `The output array is: [${squares(x, n)}].`;

divFunction.textContent = `The function that does this is let squares = ${squares}.`;
