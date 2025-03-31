# JavaScript `filter()` Method

## Overview

The `.filter()` method in JavaScript is used to create a new array containing only the elements that meet a specified condition. It does not modify the original array.

Note: filter() is only applicable to arrays and not directly on objects. If you need to filter properties of an object, you can use Object.entries() combined with filter() and then reconstruct the object.

### **Syntax:**

```javascript
array.filter(callback(element, index, array), thisArg);
```

### **Parameters:**

- `callback`: A function that is executed for each element in the array.
  - `element`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The original array being filtered.
- `thisArg` (optional): Value to use as `this` when executing the callback function.

### **Example:**

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
```

---

## **Use Cases of `filter()`**

### 1. **Removing Unwanted Values**

Filtering out null, undefined, or empty values.

```javascript
const data = [1, null, 2, "", 3, undefined, 4];
const cleanedData = data.filter((value) => value);
console.log(cleanedData); // Output: [1, 2, 3, 4]
```

### 2. **Filtering Even or Odd Numbers**

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers); // Output: [1, 3, 5]
```

### 3. **Searching in an Array (Case-Insensitive)**

```javascript
const products = ["iPhone", "iPad", "MacBook", "AirPods"];
const searchQuery = "iP";
const result = products.filter((item) =>
  item.toLowerCase().includes(searchQuery.toLowerCase())
);
console.log(result); // Output: ["iPhone", "iPad"]
```

### 4. **Filtering Objects by Property**

```javascript
const users = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true },
];
const activeUsers = users.filter((user) => user.isActive);
console.log(activeUsers); // Output: [{ name: "Alice", isActive: true }, { name: "Charlie", isActive: true }]
```

### 5. **Filtering Products Based on Price Range**

```javascript
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 500 },
];
const affordableProducts = products.filter((product) => product.price < 1000);
console.log(affordableProducts);
// Output: [{ name: "Phone", price: 800 }, { name: "Tablet", price: 500 }]
```

### 6. **Removing Duplicates from an Array**

```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbers.filter(
  (num, index, arr) => arr.indexOf(num) === index
);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
```

### 7. **Filtering Expired Items**

```javascript
const items = [
  { name: "Milk", expiryDate: "2025-04-01" },
  { name: "Cheese", expiryDate: "2024-03-20" },
];
const today = new Date();
const validItems = items.filter((item) => new Date(item.expiryDate) > today);
console.log(validItems); // Output: [{ name: "Milk", expiryDate: "2025-04-01" }]
```

### 8. **Filtering Completed Tasks from a To-Do List**

```javascript
const tasks = [
  { title: "Do laundry", completed: true },
  { title: "Write code", completed: false },
];
const incompleteTasks = tasks.filter((task) => !task.completed);
console.log(incompleteTasks); // Output: [{ title: "Write code", completed: false }]
```

### 9. **Filtering Users Based on Age**

```javascript
const users = [
  { name: "John", age: 15 },
  { name: "Emma", age: 22 },
];
const adults = users.filter((user) => user.age >= 18);
console.log(adults); // Output: [{ name: "Emma", age: 22 }]
```

### 10. **Filtering Elements That Exist in Another Array**

```javascript
const availableColors = ["red", "blue", "green", "yellow"];
const selectedColors = ["blue", "green"];
const filteredColors = availableColors.filter((color) =>
  selectedColors.includes(color)
);
console.log(filteredColors); // Output: ["blue", "green"]
```

---

### 11 **Filtering Users Based on a Condition**

```javascript
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
];
const activeUsers = users.filter((user) => user.active);
console.log(activeUsers);
/* Output:
[
  { name: "Alice", active: true },
  { name: "Charlie", active: true }
]
*/
```

---

### 12 **Filtering an Object's Properties**

- #### Since filter() does not work directly on objects, we can use Object.entries():

```javascript
const person = { name: "John", age: 30, city: "New York", premium: false };
const filteredEntries = Object.entries(person).filter(
  ([key, value]) => key !== "premium"
);
const filteredPerson = Object.fromEntries(filteredEntries);
console.log(filteredPerson);
/* Output:
{
  name: "John",
  age: 30,
  city: "New York"
}
*/
```

---

## **Conclusion**

- The `filter()` method is powerful for handling data in JavaScript.
- It is widely used in searching, cleaning data, and filtering objects based on conditions.
- It **does not** modify the original array but returns a new one.

**Use `filter()` whenever you need to extract a subset of an array based on some condition!** 🚀
