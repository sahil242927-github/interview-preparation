// Binary Search => The array has to be sorted
function binarySearch(sortedArray, searchElement) {
  let start = sortedArray[0];
  let end = sortedArray.length - 1;
  let middle = Math.floor((start + end) / 2);

  // && start <= end => this condition is for avoiding infinite loop
  while (arr[middle] !== searchElement && start <= end) {
    if (searchElement < sortedArray[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === searchElement) {
    return sortedArray[middle];
  }
  return -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);
