const h2Instructions = document.querySelector("#instructions");
const divContent = document.querySelector("#content");
const divOutput = document.querySelector("#output");
const divFunction = document.querySelector("#function");

h2Instructions.textContent = `Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind. You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them. You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:
0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"`;

let string = "/---------";
divContent.textContent = `The test string is: "${string}".`;

const bald = (s) => {
  const a = s.split("/");
  const occurence = a.length - 1;
  return [
    a.join("-"),
    occurence === 0
      ? "Clean!"
      : occurence === 1
      ? "Unicorn!"
      : occurence === 2
      ? "Homer!"
      : occurence >= 3 && occurence <= 5
      ? "Careless!"
      : "Hobo!",
  ];
};
divOutput.textContent = `The output is: ${bald(string)} `;

divFunction.textContent = `The function that solves the problem is const bald = ${bald}.`;
