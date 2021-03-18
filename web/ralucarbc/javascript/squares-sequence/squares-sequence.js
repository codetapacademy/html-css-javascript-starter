const h2Instructions = document.querySelector("#instructions");
const divContent = document.querySelector("#content");
const divOutput = document.querySelector("#output");
const divFunction = document.querySelector("#function");

h2Instructions.textContent = `Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.`;

let x = 3;
let n = 3;
divContent.textContent =
  `The test numbers are: ` +
  x +
  ` as the starting given number of the output array and ` +
  n +
  ` as the length of the output array. `;

function squares(x, n) {
  if (n <= 0) return [];
  else {
    let arr = new Array(n);
    arr[0] = x;
    for (i = 1; i < arr.length; i++) {
      arr[i] = Math.pow(arr[i - 1], 2);
    }
    return arr;
  }
}
divOutput.textContent = `The output array is: [` + squares(x, n) + `]`;

divFunction.textContent = `The function that does this is ` + squares;
