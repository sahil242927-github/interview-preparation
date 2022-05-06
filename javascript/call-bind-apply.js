function getDetails(year, company) {
  return `car price : ${this.price} \ncar model : ${this.model}\nyear : ${year}\ncompany : ${company}`;
}

function Car() {
  this.price = 10;
  this.model = 20;
}

const suzuki = new Car();

const params = [2015, "suzuki"];
console.log(getDetails.call(suzuki, 2015, "suzuki"));
console.log(getDetails.apply(suzuki, params));
