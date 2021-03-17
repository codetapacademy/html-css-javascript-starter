const repeatStr = (n, s) => s.repeat(n)
const div = document.querySelector("#repeat-a-string")
const nRange = document.querySelector("#n-range")
const sElement = document.querySelector("#s")
const nElement = document.querySelector("#n")
let n = 7
let s = "abc123"
sElement.addEventListener("change", e => {
  const { value } = e.target
  s = value
})

nElement.addEventListener("change", e => {
  const { value } = e.target
  n = value
  div.textContent = repeatStr(n, s)
})
