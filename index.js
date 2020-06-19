import check from "./module.js";

let button = document.getElementById("button");
let output = document.getElementById("output");

button.addEventListener("click", function () {
  let str = document.getElementById("input").value;
  output.innerHTML = check(str);
});

// console.log(check(prompt("isi")));
