// custom flat array
function customFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(...ar, depth - 1));
    } else {
      result.push(ar);
    }
    return result;
  });
}

const navBarItems = [
  {
    name: "Menu 1",
    link: "https://google.com",
    subItems: [
      {
        name: "Menu 2",
        link: "https://google.com/menu2",
      },
    ],
  },
  {
    name: "Menu 3",
    link: "https://google.com",
    subItems: [
      {
        name: "Menu 2",
        link: "https://google.com/menu2",
        subItems: [
          {
            name: "Menu 5",
            link: "https://google.com/menu2",
          },
          {
            name: "Menu 6",
            link: "https://google.com/menu2",
          },
        ],
      },
    ],
  },
];

const getName = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    accumulator.push(currentValue.name);
    if (currentValue.subItems) {
      accumulator = [...accumulator, ...getName(currentValue.subItems)];
    }
    return accumulator;
  }, []);
};
