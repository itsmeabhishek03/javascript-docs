````md
# Shallow Copy and Deep Copy in JavaScript

## 🔹 Shallow Copy

A **shallow copy** occurs when you copy the reference of an object to a new variable. In this process, only the **top-level properties** are copied, while nested objects or arrays still reference the original memory location. This means that if you change the nested properties in one object, those changes will reflect in the other because they **share the same memory reference**.

### How Shallow Copy Works

When you assign one object to another using the assignment operator (`=`), a shallow copy is created.

### 📌 Example: Shallow Copy

```javascript
let employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
};

console.log("Employee=> ", employee);

let newEmployee = employee; // Shallow copy

console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");

newEmployee.ename = "Beck";

console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
```
````

### 🖨️ Output

```
Employee => {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000
}
New Employee => {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000
}

---------After modification----------

Employee => {
  eid: "E102",
  ename: "Beck",
  eaddress: "New York",
  salary: 50000
}
New Employee => {
  eid: "E102",
  ename: "Beck",
  eaddress: "New York",
  salary: 50000
}
```

### 🧠 Explanation

From the above example, it is seen that when the name of `newEmployee` is modified, it is also reflected for the original `employee` object. This can cause **data inconsistency**.

The newly created object has the **same memory address** as the original. Hence, any change made to either of them affects both.

To overcome this problem, a **deep copy** is used. If one of them is removed from memory, the other one ceases to exist. In a way, the two objects are interdependent.

---

## 🔹 Deep Copy

A **deep copy**, on the other hand, creates a **completely independent** copy of the object, including all **nested objects or arrays**. This ensures that changes made to one object do **not affect** the other. Each object is stored in a separate memory location.

### 📌 Creating a Deep Copy

To create a deep copy in JavaScript, we can use `JSON.parse()` and `JSON.stringify()` methods.

### ✅ Example: Deep Copy

```javascript
let employee = {
  eid: "E102",
  ename: "Jack",
  eaddress: "New York",
  salary: 50000,
};

console.log("=========Deep Copy========");

let newEmployee = JSON.parse(JSON.stringify(employee));

console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

console.log("---------After modification---------");

newEmployee.ename = "Beck";
newEmployee.salary = 70000;

console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
```

### 🖨️ Output

```
=========================Deep Copy=========================
Employee=> { eid: 'E102', ename: 'Jack', eaddress: 'New York', salary: 50000 }
New Employee=> { eid: 'E102', ename: 'Jack', eaddress: 'New York', salary: 50000 }

-------------------------After modification-------------------------
Employee=> { eid: 'E102', ename: 'Jack', eaddress: 'New York', salary: 50000 }
New Employee=> { eid: 'E102', ename: 'Beck', eaddress: 'New York', salary: 70000 }
```

### 🧠 Explanation

The new object is created using `JSON.parse()` and `JSON.stringify()`:

- `JSON.stringify()` takes a JavaScript object and converts it to a JSON string.
- `JSON.parse()` converts that JSON string back to a new JavaScript object.

This method is useful when the object is **small** and has **serializable properties**.

---

## ❌ Limitations of `JSON.stringify()` and `JSON.parse()`

- **Non-Serializable Properties**: Functions, `undefined`, and certain other values are lost.
- **Circular References**: Objects with circular references will throw an error.
- **Date Objects**: Dates are converted to strings and lose their original type.

---

## ✅ Using Lodash for Deep Copy

[Lodash](https://lodash.com/) is a JavaScript utility library that provides many helper functions. One of the most commonly used functions in Lodash is `_.cloneDeep()`.

```javascript
import _ from "lodash";

let deepCopy = _.cloneDeep(originalObject);
```

This method:

- Deeply clones nested objects/arrays
- Preserves methods and non-serializable properties
- Avoids limitations of JSON-based deep cloning

---

> ✅ Use shallow copy for performance in simple, flat objects.
> ✅ Use deep copy when working with nested structures or when full independence is required.

```

```
