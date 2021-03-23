const h2Instr = document.querySelector("#instructions");
const divContent = document.querySelector("#content");
const divOutput = document.querySelector("#output");
const divFunction = document.querySelector("#function");

h2Instr.textContent = `Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.`;

let arr = ["5", "0", 9, 3, 2, 1, "9", 6, 7];
divContent.textContent = `The test array is array = [${arr}].`;

const sumMix = (x) => x.map((i) => Number(i)).reduce((a, c) => a + c, 0);
divOutput.textContent = `The output (sum of the array values as if all were numbers) is: ${sumMix(
  arr
)}.`;

divFunction.textContent = `The function that does this is const sumMix = ${sumMix}.`;
