const divRead = document.querySelector("#read-input");
const divWrite = document.querySelector("#write-output");

let son = 7;
let dad = 36;

const twiceAsOld = (dad, son) => Math.abs(dad - 2 * son);

fct = "const twiceAsOld = (dad, son) => Math.abs(dad - 2 * son);";

divRead.textContent =
  "If dad is " +
  dad +
  " years old and son is " +
  son +
  " years old, then dad will have twice the age of the son in " +
  twiceAsOld(dad, son) +
  " years from now.";

divWrite.textContent = "The function that does this is: " + fct;
