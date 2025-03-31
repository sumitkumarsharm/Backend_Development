# JavaScript `forEach()` Method

## Overview

The `.forEach()` method in JavaScript is used to execute a function on each element of an array **without** creating a new array. It is typically used for iteration and performing side effects such as logging, updating variables, or modifying objects.

> **Note:** `forEach()` is only applicable to **arrays** and not directly on objects. If you need to iterate over an object, you can use `Object.keys()`, `Object.values()`, or `Object.entries()`.

---

## **Syntax:**

```javascript
array.forEach(callback(element, index, array), thisArg);
```

### **Example:**

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num * 2));
/* Output:
2
4
6
8
*/
```

---

## **Use Cases of `forEach()`**

### 1. **Looping Through an Array Without Returning a New Array**

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit) => console.log(fruit));
/* Output:
Apple
Banana
Cherry
*/
```

### 2. **Modifying an External Variable**

```javascript
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => (sum += num));
console.log(sum); // Output: 15
```

### 3. **Updating Object Properties**

```javascript
const users = [
  { name: "Alice", active: false },
  { name: "Bob", active: false },
];
users.forEach((user) => (user.active = true));
console.log(users);
/* Output:
[
  { name: "Alice", active: true },
  { name: "Bob", active: true }
]
*/
```

### 4. **Logging Each Element in an Array**

```javascript
const colors = ["Red", "Green", "Blue"];
colors.forEach((color, index) => console.log(`${index + 1}: ${color}`));
/* Output:
1: Red
2: Green
3: Blue
*/
```

### 5. **Iterating Over an Object Using `Object.entries()`**

Since `forEach()` does not work directly on objects, we can use `Object.entries()`:

```javascript
const person = { name: "John", age: 30, city: "New York" };
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
/* Output:
name: John
age: 30
city: New York
*/
```

---

## **Key Characteristics of `forEach()`**

- It does **not** return a new array.
- It modifies elements **only** if they are objects (not primitive values).
- It is best suited for performing **side effects** (e.g., logging, modifying external variables, updating UI elements).
- It does **not** work directly on objects; use `Object.keys()`, `Object.values()`, or `Object.entries()` instead.

---

## **Conclusion**

- Use `forEach()` when you only need to loop through an array without creating a new one.
- It is ideal for operations like **logging, modifying external variables, or updating object properties.**
- If you need to iterate over an object, use `Object.entries()`.

**Use `forEach()` when you don't need to transform data but only need to execute code for each element!** 🚀
