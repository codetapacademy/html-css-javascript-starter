const h2Instructions = document.querySelector("#instructions");
const divContent = document.querySelector("#content");
const divOutput = document.querySelector("#output");
const divFunction = document.querySelector("#function");

h2Instructions.textContent = `Given an array of ones and zeroes, convert the equivalent binary value to an integer.`;

let arr = [0, 1, 1, 0];
divContent.textContent = `The test array is [${arr}].`;

const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);
divOutput.textContent = `The output is ${binaryArrayToNumber(arr)}.`;

divFunction.textContent = `The function thta solves the problem is const binaryArrayToNumber = ${binaryArrayToNumber}.`;
