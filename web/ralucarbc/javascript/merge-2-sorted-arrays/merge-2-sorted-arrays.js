const divFinal = document.querySelector("#final-result");
const divRead = document.querySelector("#read-arrays");
let arr5 = [1, 3, 5, 7, 9, 11, 12];
let arr6 = [1, 2, 3, 4, 5, 10, 12];
let array = [...new Set(arr5.concat(arr6).sort((a, b) => a - b))];
divRead.textContent =
  "The first array was: [" +
  arr5 +
  "] and the second array was: [" +
  arr6 +
  "]";
divFinal.textContent = "The sorted array is: [" + array + "]";
