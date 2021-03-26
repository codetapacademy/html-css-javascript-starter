const h2Instructions = document.querySelector("#instructions");
const divContent = document.querySelector("#content");
const divOutput = document.querySelector("#output");
const divFunction = document.querySelector("#function");

h2Instructions.textContent = `You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around! Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail). Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics.`;

let arr = ["tail", "body", "head"];
divContent.textContent = `The test array is: [${arr}].`;

const fixTheMeerkat = (arr) => arr.reverse();
divOutput.textContent = `The output is: [${fixTheMeerkat(arr)}].`;

divFunction.textContent = `The function that solves the problem is const fixTheMeerkat = ${fixTheMeerkat}.`;
