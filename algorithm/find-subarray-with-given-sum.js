//Function to find a continuous sub-array which adds up to a given number.

/**
  Pseudo code--
  we will take the current sum and minus the sum
  if we found that value inside our hash map, it means we get the sub array

                     <-----sum--->
  <------current sum------------->

  We will iterate each value and store it's sum and index in the hash map
  
 */

function subarraySum(arr, sum) {
  let start = 0,
    curSum = 0;
  end = -1;

  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    console.log(curSum);

    // handling if the first value is same as sum
    if (curSum - sum === 0) {
      start = 0;
      end = i;
      break;
    }

    // if hash has map - sum, it mean we found the subarray
    if (hashMap.has(curSum - sum)) {
      start = hashMap.get(curSum - sum) + 1;
      end = i;
      break;
    }
    hashMap.set(curSum, i);
    console.log(hashMap);
  }
  if (end === -1) {
    return "we did not find the value";
  } else {
    return { start, end };
  }
}

console.log(subarraySum([1, 2, 3, 10, 25, 7, 5, 6, 12], 13));
