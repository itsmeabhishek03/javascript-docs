In JavaScript, **function declaration** and **function expression** are two main ways to define functions. They are similar in functionality but differ in **syntax**, **hoisting behavior**, and sometimes **use cases**.

---

### 🔹 1. Function Declaration

A **function declaration** defines a named function using the `function` keyword.

#### ✅ Syntax:

```javascript
function greet() {
  console.log("Hello!");
}
```

#### ✅ Features:

- **Hoisted**: You can call the function **before** it’s defined.

```javascript
greet(); // Works!

function greet() {
  console.log("Hello!");
}
```

---

### 🔹 2. Function Expression

A **function expression** defines a function and assigns it to a variable.

#### ✅ Syntax:

```javascript
const greet = function () {
  console.log("Hello!");
};
```

You can also name it (less common):

```javascript
const greet = function sayHello() {
  console.log("Hello!");
};
```

#### ✅ Features:

- **Not hoisted**: You must define it before calling it.

```javascript
greet(); // ❌ Error: Cannot access 'greet' before initialization

const greet = function () {
  console.log("Hello!");
};
```

---

### 🔹 Summary Table

| Feature             | Function Declaration       | Function Expression          |
| ------------------- | -------------------------- | ---------------------------- |
| Syntax              | `function name() {}`       | `const name = function() {}` |
| Name                | Required                   | Optional (can be anonymous)  |
| Hoisting            | ✅ Yes                     | ❌ No                        |
| Use before defined? | ✅ Allowed                 | ❌ Not allowed               |
| Preferred use       | Global, reusable functions | Inline or as callbacks       |

---

### 🔹 Arrow Functions (Bonus Expression Type)

```javascript
const greet = () => {
  console.log("Hello!");
};
```

- Arrow functions are always expressions.
- They are concise but behave differently with `this`.
