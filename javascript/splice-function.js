// splice returns the deleted array
const arr = [1, 2, 3, 4, 5];

// // add 6,7,8 at the end
// arr.splice(arr.length, 0, 6, 7, 8);
// console.log(arr);

// // add 6,7,8 in front
// arr.splice(0, 0, 6, 7, 8);
// console.log(arr);

// add 6,7,8 in front
arr.splice(2, 1, 6, 7, 8); // [1,2,6,7,8,4,5]
console.log(arr);
