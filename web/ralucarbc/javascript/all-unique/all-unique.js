const h2Instructions = document.querySelector("#instructions");
const divContent = document.querySelector("#content");
const divOutput = document.querySelector("#output");
const divFunction = document.querySelector("#function");

h2Instructions.textContent = `Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise. The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.`;

let string = "++-";
divContent.textContent = `The test string is: "${string}".`;

const hasUniqueChars = (str) =>
  str.length === [...new Set(str)].length;
divOutput.textContent = `The output (true/false if a string does/does not contain only unique characters) is: ${hasUniqueChars(
  string
)}.`;

divFunction.textContent = `The function that does this is const hasUniqueChars = ${hasUniqueChars}.`;
