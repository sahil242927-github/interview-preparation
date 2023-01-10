/* 
    Slice(startIndex, endIndex) : creates a new array, doesn't change the original array
    Note: end index doesn't include.

    const arr = [1, 2, 3, 4, 5, 6];    
    arr.slice(2, 3)); // [3];
    Example: index 3 is the value 4 in the array since it is the end index inside slice method, it doesn't include
    
*/

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(2, 3)); // [3];

// returning every elms from index 2,
console.log(arr.slice(2)); // [3,4,5,6];

// indicating an offset from the end of the sequence. slice(-2)
// extracts the last two elements in the sequence.
console.log(arr.slice(2, -2)); // [3,4]

// doesn't change the original array
console.log(arr);
