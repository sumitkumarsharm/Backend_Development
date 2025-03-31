const data = [
  1,
  null,
  2,
  "",
  3,
  undefined,
  4,
  0,
  NaN,
  false,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
];

// forEach
let anotherArr = [];
data.forEach((items) =>
  items > 10 ? anotherArr.push(items) : anotherArr.push(undefined)
);
console.log(anotherArr);

//
const person = { name: "John", age: 30, city: "New York" };
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((numbers) => numbers * 2);
console.log(doubled);

// filter
numbers.filter((n) =>
  n > 2 ? console.log("Value Aa gya") : console.log("Value nahi aaya")
);

// object

const myObj = {
  Name: "John",
  agr: 778,
  iseorking: false,
};
console.log(myObj);
console.log(myObj.Name);
