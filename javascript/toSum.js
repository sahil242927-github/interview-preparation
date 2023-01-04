/* Problem Statement

Array : [ 1, 3, 7, 9, 2]
input: 11
output should be [3, 4]

*/

const array = [1, 3, 7, 9, 2];
const num = 11;

const towSum = (arr, num) => {
  const numObj = {};

  for (let i = 0; i < arr.length; i++) {
    let numberToFind = num - arr[i];

    // after substracting current number of the array from the given number
    // if that remaining number has in the map, that is the second number to sum the input number
    if (numObj[arr[i]] >= 0) {
      return [numObj[arr[i]], i];
    }
    numObj[numberToFind] = i;
  }
};

console.log(towSum(array, num));
