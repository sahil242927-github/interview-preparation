// Promise.allSettled() is a method that takes an array of promises and returns a single promise
//  that resolves after all of the input promises have either resolved or rejected.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First promise resolved"), 1000); // 1 second
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Second promise rejected"), 1500); // 1.5 seconds
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Third promise resolved"), 2000); // 2 seconds
});

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  console.log("All promises settled:");
  console.log(results);
});
