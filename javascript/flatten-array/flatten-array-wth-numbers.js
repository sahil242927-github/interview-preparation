const arr = [1, 2, 3, [4, 5, 6], [7, 8, 9, [10, 11, 12]]];

function flattenArray(arr) {
  const newArray = arr.reduce((prevVal, currVal) => {
    if (Array.isArray(currVal)) {
      prevVal = [...prevVal, ...flattenArray(currVal)];
    } else {
      prevVal.push(currVal);
    }
    return prevVal;
  }, []);
  return newArray;
}

console.log(flattenArray(arr));
