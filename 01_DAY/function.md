# JavaScript Functions

## Overview

A function in JavaScript is a **block of reusable code** that performs a specific task. Functions help in making code modular, maintainable, and reusable.

> **Note:** Functions can be declared in different ways, such as function declarations, function expressions, and arrow functions. JavaScript also supports higher-order functions, which take other functions as arguments or return them as results.

---

## **Syntax:**

```javascript
function functionName(parameters) {
  // function body
  return result;
}
```

### **Example:**

```javascript
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5
```

---

## **Types of Functions**

### 1. **Function Declaration**

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
```

### 2. **Function Expression**

```javascript
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(3, 4)); // Output: 12
```

### 3. **Arrow Function**

```javascript
const square = (num) => num * num;
console.log(square(5)); // Output: 25
```

### 4. **Immediately Invoked Function Expression (IIFE)**

```javascript
(function () {
  console.log("This function runs immediately!");
})();
// Output: This function runs immediately!
```

### 5. **Higher-Order Function (Passing a Function as an Argument)**

```javascript
function operate(a, b, operation) {
  return operation(a, b);
}
const result = operate(4, 2, (x, y) => x - y);
console.log(result); // Output: 2
```

---

## **Use Cases of Functions**

### 1. **Code Reusability**

```javascript
function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(5, 10)); // Output: 50
console.log(calculateArea(3, 7)); // Output: 21
```

### 2. **Encapsulation & Abstraction**

Functions help encapsulate logic, making the code easier to understand and maintain.

```javascript
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // Output: true
```

### 3. **Event Handling in JavaScript**

```javascript
document.getElementById("btn").addEventListener("click", function () {
  alert("Button clicked!");
});
```

### 4. **Returning Functions (Closures)**

```javascript
function outerFunction(x) {
  return function (y) {
    return x + y;
  };
}
const addFive = outerFunction(5);
console.log(addFive(3)); // Output: 8
```

---

## **Key Characteristics of Functions**

- Functions help in **reducing redundancy** and making code reusable.
- JavaScript functions are **first-class citizens**, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
- Functions can have **default parameters**, **rest parameters**, and can use **closures** to remember values.

---

## **Conclusion**

- Use functions to **organize** and **modularize** your code.
- Different types of functions serve different purposes, such as **arrow functions for concise syntax** and **higher-order functions for functional programming.**
- Functions make code more **readable, reusable, and maintainable**.

\*\*Use functions to st
