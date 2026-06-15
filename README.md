# React Accordion Component

## Overview

This project is a reusable Accordion Component built with React and Tailwind CSS. The goal of this project was to practice React state management, component composition, event handling, and array manipulation techniques commonly asked in React machine coding interviews.

---

## Features

* Expand individual accordion items
* Collapse individual accordion items
* Open multiple accordion items simultaneously
* Expand All functionality
* Collapse All functionality
* Dynamic rendering using data arrays
* Reusable component structure
* Responsive UI with Tailwind CSS

---

## Project Structure

```bash
src
│
├── components
│   ├── Accordion.jsx
│   ├── AccordionItem.jsx
│   └── Header.jsx
│
├── data
│   └── faqData.js
│
└── App.jsx
```

---

## Concepts Learned

### React State Management

Used React's `useState` hook to manage accordion open and close states.

```js
const [openItems, setOpenItems] = useState([]);
```

---

### State Lifting

Managed the accordion state in the parent component and passed data/functions to child components via props.

---

### Props Drilling

Passed data and event handlers from parent to child components.

Examples:

* FAQ Data
* Open State
* Toggle Handler
* Expand All Handler
* Collapse All Handler

---

### Dynamic Rendering

Rendered accordion items dynamically using the `map()` method.

```js
faq.map((item) => ...)
```

---

### Array Methods

Practiced important JavaScript array methods used frequently in React development.

#### map()

Used to generate all accordion items dynamically.

#### includes()

Used to check whether an accordion item is currently open.

```js
openItems.includes(item.id)
```

#### filter()

Used to remove an item from the open accordion list.

```js
prev.filter(item => item !== id)
```

#### Spread Operator

Used to add new items into the state array.

```js
[...prev, id]
```

---

## Toggle Logic

Implemented a reusable toggle mechanism:

* If an item is already open → close it.
* If an item is closed → open it.

```js
setOpenItems((prev) =>
  prev.includes(id)
    ? prev.filter((item) => item !== id)
    : [...prev, id]
);
```

---

## Machine Coding Concepts Covered

* Component Composition
* State Lifting
* Conditional Rendering
* Event Handling
* Dynamic UI Rendering
* Array State Management
* Reusable Component Design

---

## Future Improvements

* Smooth Accordion Animations
* Keyboard Accessibility
* Single Open Mode
* Custom Accordion API
* Unit Testing
* TypeScript Support

---

## What I Learned

This project helped me understand:

* How React re-renders components when state changes
* How to manage complex state using arrays
* How to create reusable React components
* How array methods like `map`, `includes`, and `filter` are used in real-world React applications
* How machine coding interview problems are structured and solved

---

## Tech Stack

* React
* JavaScript (ES6+)
* Tailwind CSS
* Vite

---

## Author

Aakash Kasturiya
React Developer | Frontend Engineer

Preparing for React Frontend Interviews and building machine coding projects to strengthen React fundamentals and problem-solving skills.
