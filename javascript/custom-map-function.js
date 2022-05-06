/* The function in the argument should be called for each value in the array with 3 arguments:
The current element
Current element's index
Entire Array
*/

// step 1 we need a function with callback argument
Array.prototype.myMap = function (callback) {
  const resultArray = [];
  // map function returns 3 things, value, index and array itself
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callback(this[index], index, this));
  }
  // return the result with each call
  return resultArray;
};

const numbers = [1, 2, 3];

console.log(numbers.myMap((num) => num * 2));
