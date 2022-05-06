// curry function
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log("curry function => ", add(5)(2)(4)(10)());

// implement the code
const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
};
const calResult = calc.add(10).multiply(5).subtract(30).add(10);
console.log("calResult.total => ", calResult.total);
