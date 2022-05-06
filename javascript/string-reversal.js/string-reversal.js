// solution 1
// function stringReversal(str) {
//   return str.split("").reverse().join("");
// }

// solution 2
function stringReversal(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
}

console.log(stringReversal("abc"));
