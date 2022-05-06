// The solution is done by Kaden's algorithm
// find maximum sum of sub array in the given array

function getMaxSum(arr) {
  let maxSum = 0;
  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // initialize currSum
    currSum = currSum + arr[i];

    // if maxSum is smaller than current sum
    // replace maxSum with currSum
    if (arr[i] > maxSum) maxSum = arr[i];

    // if currSum is negative, make it zero, discard it
    if (arr[i] < 0) {
      currSum = 0;
    }
  }
  return maxSum;
}

console.log(getMaxSum([1, 2, -3, 5, 6 - 3]));
