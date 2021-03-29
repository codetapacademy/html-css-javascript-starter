const h2Instructions = document.querySelector("#instructions");
const divContent = document.querySelector("#content");
const divOutput = document.querySelector("#output");
const divFunction = document.querySelector("#function");

h2Instructions.textContent = `A bug lives in a world which is a cuboid and has to walk from one corner of the cuboid to the opposite corner (see the picture below). Define a function which takes 3 arguments: the length a , width b, and height c of the bug's "world", and finds the shortest distance needed to walk from start to finish. The dimensions will be positive numbers. Note: The bug cannot fly and has to maintain contact with a surface at all times but can walk up walls.`;

let a = 134;
let b = 191.5;
let c = 45.5;
divContent.textContent = `The test values for the cuboid size are: ${a} as the length, ${b} as the width and ${c} as height.`;

const shortestDistance = (a, b, c) => {
  let arr = [a, b, c].sort((a, b) => a - b);
  return Math.sqrt(Math.pow(arr[0] + arr[1], 2) + Math.pow(arr[2], 2));
};
divOutput.textContent = `The output is ${shortestDistance(a, b, c)}.`;

divFunction.textContent = `The function that solves the problem is const shortestDistance = ${shortestDistance}.`;
