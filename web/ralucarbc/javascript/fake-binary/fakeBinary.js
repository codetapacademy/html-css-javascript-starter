const h2Instructions = document.querySelector("#instructions");
const divContent = document.querySelector("#content");
const divOutput = document.querySelector("#output");
const divFunction = document.querySelector("#function");

h2Instructions.textContent = `Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.`;

let string = "45385593107843568";
divContent.textContent = `The test string is "${string}".`;

const fakeBin = (x) => x.replace(/0|1|2|3|4/g, "0").replace(/5|6|7|8|9/g, "1");
divOutput.textContent = `The output is: "${fakeBin(string)}".`;

divFunction.textContent = `The function that solves the problem is const fakeBin = ${fakeBin}.`;
