const divRead = document.querySelector("#read-input");
const divFinal = document.querySelector("#write-output");

let a = [2, 2, 3];
let b = [5, 4, 1];

divRead.textContent =
  "First cuboid's parameters are: [" +
  a +
  "] and second cuboid's parameters are: [" +
  b +
  "]";

const diffe = (a, b) =>
  Math.abs(a.reduce((a, c) => a * c, 1) - b.reduce((a, c) => a * c, 1));

divFinal.textContent =
  "The difference of the cuboids' volumes regardless of which is bigger is: " +
  diffe(a, b) +
  ".";
