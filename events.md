## 1. What Is an Event?

An **event** is any significant action or occurrence detected by the browser, often triggered by user interactions or by programmatic actions:

- **User-driven events**: clicks, key presses, mouse movements, form submissions, etc.
- **Browser-driven events**: page load, resize, scroll, animation frames, network responses, etc.
- **Custom events**: user-defined signals you dispatch yourself.

---

## 2. Event Targets and Listeners

Every event originates from an **EventTarget**—commonly a DOM node, the document, window, or even custom objects. You “listen” for events by attaching a callback via one of:

```js
// 1. addEventListener
element.addEventListener("click", handler, /* useCapture? */ false);

// 2. on-event handler property
element.onclick = handler;

// 3. inline HTML (not recommended)
<button onclick="handler(event)">Click me</button>;
```

**Example:**

```html
<button id="btn">Click me</button>
<script>
  const btn = document.getElementById("btn");
  btn.addEventListener("click", function (event) {
    console.log("Button clicked!", event);
  });
</script>
```

---

## 3. Event Propagation: Capturing, Target, Bubbling

When an event happens on a nested element, the browser walks the DOM tree in three phases:

1. **Capturing phase** (top → down)
2. **Target phase** (the actual node)
3. **Bubbling phase** (node → up)

By default `addEventListener` listens in the **bubbling** phase (`useCapture = false`).

```html
<div id="outer">
  <button id="inner">Click me</button>
</div>
<script>
  const outer = document.getElementById("outer");
  const inner = document.getElementById("inner");

  outer.addEventListener("click", () => console.log("outer bubbled"), false);
  inner.addEventListener("click", () => console.log("inner bubbled"), false);

  outer.addEventListener("click", () => console.log("outer captured"), true);
  inner.addEventListener("click", () => console.log("inner captured"), true);
</script>
```

**Clicking the button** logs:

```
outer captured
inner captured
inner bubbled
outer bubbled
```

---

## 4. The Event Object

Every listener receives an **Event** object, which contains:

- `type`: the event name (e.g. `"click"`).
- `target`: the original element clicked.
- `currentTarget`: the element whose handler is executing.
- `bubbles`: whether it bubbles.
- `cancelable`: whether you can prevent the default.
- Methods:

  - `event.stopPropagation()`: stop further propagation.
  - `event.preventDefault()`: prevent the browser’s default action.
  - `event.stopImmediatePropagation()`: stop other handlers on the same element.

```js
inner.addEventListener("click", function (e) {
  console.log(e.type, "on", e.currentTarget.id);
  e.stopPropagation(); // no bubbling past this
  e.preventDefault(); // if it were a link/form
});
```

---

## 5. Default Actions

Some elements have built-in behaviors:

- `<a>`: navigating the `href`
- `<form>`: submitting & reloading
- `<input>`: focusing, checking

To override them, call `event.preventDefault()` in a listener on a cancelable event:

```html
<a href="https://example.com" id="link">Go</a>
<script>
  document.getElementById("link").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Navigation prevented!");
  });
</script>
```

---

## 6. Event Delegation

Instead of attaching listeners to many child elements, attach one to a common parent and inspect `event.target`:

```html
<ul id="list">
  <li data-id="1">Item 1</li>
  <li data-id="2">Item 2</li>
  <li data-id="3">Item 3</li>
</ul>
<script>
  document.getElementById("list").addEventListener("click", (e) => {
    if (e.target.matches("li")) {
      console.log("Clicked item", e.target.dataset.id);
    }
  });
</script>
```

> **Why?** Fewer listeners → better performance, handles dynamic children.

---

## 7. Custom Events

You can create and dispatch your own events:

```js
// 1. Define the event (optionally carry data via detail)
const myEvent = new CustomEvent("user-logged-in", {
  detail: { userId: 42 },
});

// 2. Listen for it
document.addEventListener("user-logged-in", (e) => {
  console.log("Welcome user", e.detail.userId);
});

// 3. Dispatch it
document.dispatchEvent(myEvent);
```

Custom events also bubble by default and can be made non-cancelable via options.

---

## 8. Common Built-in Events

- **Mouse**: `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`
- **Keyboard**: `keydown`, `keyup`, `keypress` (deprecated)
- **Form**: `submit`, `change`, `input`, `focus`, `blur`
- **Window**: `load`, `DOMContentLoaded`, `resize`, `scroll`, `hashchange`
- **Clipboard**: `copy`, `cut`, `paste`
- **Drag & Drop**: `dragstart`, `dragover`, `drop`
- **Touch** (mobile): `touchstart`, `touchmove`, `touchend`

---

## 9. Example: A Simple Interactive Widget

Putting it all together—here’s a tiny “accordion” component:

```html
<style>
  .panel {
    display: none;
    padding: 0.5em;
    border: 1px solid #ccc;
  }
  .panel.active {
    display: block;
  }
  .header {
    cursor: pointer;
    background: #eee;
    padding: 0.5em;
  }
</style>

<div class="accordion">
  <div class="item">
    <div class="header">Section 1</div>
    <div class="panel">Content 1</div>
  </div>
  <div class="item">
    <div class="header">Section 2</div>
    <div class="panel">Content 2</div>
  </div>
</div>

<script>
  document.querySelector(".accordion").addEventListener("click", (e) => {
    if (!e.target.matches(".header")) return;
    // Toggle the panel below this header
    const panel = e.target.nextElementSibling;
    panel.classList.toggle("active");
  });
</script>
```

- **Delegation**: one listener on `.accordion`
- **Event**: `click`
- **Target checking**: `.matches()`
- **DOM manipulation**: `classList.toggle()`

---

### In Summary

1. **Events** are signals fired by user or browser actions (or custom code).
2. You **listen** with `addEventListener` (or `on…` properties).
3. **Propagation**: capturing → target → bubbling (control with `stopPropagation()`).
4. **Default actions** can be prevented (`preventDefault()`).
5. **Delegation** centralizes handling on parent nodes.
6. You can even **create** and **dispatch** custom events.

Mastering this event model is key to building interactive, high-performance web apps.
