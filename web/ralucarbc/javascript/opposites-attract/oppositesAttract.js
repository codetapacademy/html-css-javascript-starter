const h2Instructions = document.querySelector("#instruction");
const divContent = document.querySelector("#content");
const divOutput = document.querySelector("#output");
const divFunction = document.querySelector("#function");

h2Instructions.textContent = `Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.`;

let flower1 = 1;
let flower2 = 4;
divContent.textContent = `The test numbers for the flowers' petals are: ${flower1} petals for the first one's flower and ${flower2} petals for the second's flower.`;

const lovefunc = (flower1, flower2) =>
  (flower1 % 2 === 0 && flower2 % 2 === 0) ||
  (flower1 % 2 === 1 && flower2 % 2 === 1)
    ? false
    : true;
divOutput.textContent = `The output (true/false if they are in love/not) is ${lovefunc(
  flower1,
  flower2
)}.`;

divFunction.textContent = `The function that solves this problem is const lovefunc = ${lovefunc}. `;
