// debounce => when we type in input box, it should wait to bring the result until we stopped typing
function myDebounce(cb, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
}

myDebounce((e) => {
  console.log("I am done", e);
}, 1000)();
