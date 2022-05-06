/*
    Event.CAPTURING_PHASE => Event handlers are executed while descending down the tree
    Event.BUBBLING_PHASE => Event handlers are executed while Ascending up the tree
*/

// find the output of the below code
button.addEventListener("click", () => {
  Promise.resolve().then(() => console.log(p1));
  console.log(1);
});
button.addEventListener("click", () => {
  Promise.resolve().then(() => console.log(p2));
  console.log(2);
});
// Ans : => both the events would be registered.
output; // 1, p1, 2, p2
