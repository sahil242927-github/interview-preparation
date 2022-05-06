//  declared function hoist 100% where as arrow function does not

myFunction(); // it will execute since it hoists 100%

function myFunction() {
  console.log("Function declaration hoists 100%");
}

myArrowFunction(); // Cannot access 'myArrowFunction' before initialization
const myArrowFunction = () => {
  console.log("My arrow function doesn't hoist");
};

var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun(); //
