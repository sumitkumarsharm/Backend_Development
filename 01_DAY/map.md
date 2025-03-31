# JavaScript `map()` Method

## Overview

The `.map()` method in JavaScript is used to create a new array by applying a function to each element of an existing array. It does **not** modify the original array.

### **Syntax:**

```javascript
array.map(callback(element, index, array), thisArg);
```

### **Parameters:**

- `callback`: A function that is executed for each element in the array.
  - `element`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The original array being mapped.
- `thisArg` (optional): Value to use as `this` when executing the callback function.

### **Example:**

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

---

## **Use Cases of `map()`**

### 1. **Transforming an Array of Numbers**

```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

### 2. **Converting Strings to Uppercase**

```javascript
const words = ["apple", "banana", "cherry"];
const upperCaseWords = words.map((word) => word.toUpperCase());
console.log(upperCaseWords); // Output: ["APPLE", "BANANA", "CHERRY"]
```

### 3. **Extracting Specific Properties from Objects**

```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const names = users.map((user) => user.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]
```

### 4. **Formatting Data (Adding Currency to Prices)**

```javascript
const prices = [10, 20, 30];
const formattedPrices = prices.map((price) => `$${price.toFixed(2)}`);
console.log(formattedPrices); // Output: ["$10.00", "$20.00", "$30.00"]
```

### 5. **Modifying Objects in an Array**

```javascript
const students = [
  { name: "John", grade: 85 },
  { name: "Emma", grade: 90 },
];
const updatedStudents = students.map((student) => ({
  ...student,
  passed: student.grade >= 50,
}));
console.log(updatedStudents);
/* Output:
[
  { name: "John", grade: 85, passed: true },
  { name: "Emma", grade: 90, passed: true }
]
*/
```

### 6. **Creating a List of HTML Elements**

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
const fruitElements = fruits.map((fruit) => `<li>${fruit}</li>`);
console.log(fruitElements);
/* Output:
["<li>Apple</li>", "<li>Banana</li>", "<li>Cherry</li>"]
*/
```

### 7. **Parsing JSON Data**

```javascript
const jsonData = '[{"name":"Alice"},{"name":"Bob"}]';
const parsedData = JSON.parse(jsonData).map((user) => user.name);
console.log(parsedData); // Output: ["Alice", "Bob"]
```

### 8. **Generating Unique IDs for Elements**

```javascript
const items = ["Item1", "Item2", "Item3"];
const itemsWithID = items.map((item, index) => ({ id: index + 1, name: item }));
console.log(itemsWithID);
/* Output:
[
  { id: 1, name: "Item1" },
  { id: 2, name: "Item2" },
  { id: 3, name: "Item3" }
]
*/
```

### 9. **Converting an Array of Strings to Numbers**

```javascript
const stringNumbers = ["1", "2", "3"];
const numbers = stringNumbers.map(Number);
console.log(numbers); // Output: [1, 2, 3]
```

### 10. **Applying Discounts to Prices**

```javascript
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
];
const discountedProducts = products.map((product) => ({
  ...product,
  price: product.price * 0.9,
}));
console.log(discountedProducts);
/* Output:
[
  { name: "Laptop", price: 900 },
  { name: "Phone", price: 450 }
]
*/
```

---

## **Conclusion**

- The `map()` method is powerful for **transforming** and **modifying** array data.
- It **does not** modify the original array but returns a new one.
- It is commonly used in functional programming and data manipulation.

**Use `map()` whenever you need to apply a transformation to every element of an array!** 🚀
