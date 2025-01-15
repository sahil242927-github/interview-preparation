// Promises States : pending, fulfilled, rejected

// Promise.all() => When all the promises fulfills; rejects when ay of the promises rejects
// Total time will be highest time a promise will take

// Creating some sample promises
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First promise resolved"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Second promise resolved"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Third promise resolved"), 1500);
  // setTimeout(() => reject("Third promise rejected"), 1500);
});

// Using Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved!");
    console.log(results); // ["First promise resolved", "Second promise resolved", "Third promise resolved"]
  })
  .catch((error) => {
    console.error("One of the promises failed", error);
  });
