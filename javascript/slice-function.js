const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(2, 3)); // [3];

// returns every elms from index 2
console.log(arr.slice(2)); // [3,4,5,6];

// sed, indicating an offset from the end of the sequence. slice(-2)
// extracts the last two elements in the sequence.
console.log(arr.slice(2, -2)); // [3,4]
