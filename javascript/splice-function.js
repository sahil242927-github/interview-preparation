/* 
    splice => it gives you adding, removing, updating value features. it changes the original array
    splice(startIndex, deleteCount, item1, item2) 
*/

const arr = [1, 2, 3, 4, 5];

// Adding 6,7,8 at the end
arr.splice(arr.length, 0, 6, 7, 8);
console.log(arr);

// Removing 1 element at index 3
//  [1, 2, 3, 4, 5];
const removedItem = arr.splice(3, 1);
console.log(removedItem); // 4
console.log(arr); //  [1, 2, 3, 5];

// Replacing element at index 3 and adding item 10
//  [1, 2, 3, 4, 5];
console.log(`====================`);
const replacedItem = arr.splice(3, 1, 10);
console.log(replacedItem); // 4
console.log(arr); //  [1, 2, 3, 10, 5];
