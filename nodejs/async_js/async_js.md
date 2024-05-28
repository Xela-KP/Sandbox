# Synchronous and Asynchronous javascript

## Synchronous Operations

Code runs sequentially, one line after the other

## Asynchronous Operations

Code that runs off of the main thread.
Does **not block** proceeding code from running.
**Synchronous code** does not wait for **asynchronous code** to complete.
Code that runs in **parallel** with **synchronous code**

## Callbacks

### Synchronous Callbacks

A **operation** that is executed **after** an **initial operation**.
By this definition, all **synchronous** code are technically **callbacks** to **preceeding** lines.

**Example:**

```js
console.log('Hello');
console.log('World');

console.log('Call Timothy');
console.log('Call Sydney');
```

This is a **synchronous** program.
`Hello` is logged first.
`World` is logged after `Hello`.
By the above defenition: `console.log('World');` is *technically* a **callback** to `console.log('Hello');`.

An equivalent program:

```js
function logHello(callback) {
    console.log('Hello');
    callback();
}

function logWorld() {
    console.log('World');
}

logHello(logWorld);

console.log('Call Timothy');
console.log('Call Sydney');
```

`logWorld` is a **callback** to `logHello`.
Both above programs do the exact same thing.

In both examples, `Hello` **must** be logged **before** `World`.
`World` **waits** for `Hello` to be logged.
We must also wait for `Hello` and `World` to be logged before we can call `Timothy` and `Sydney`.

This is useless by itself. Why not just write **synchronous** code line by line then? What's the point of this definition?

### Asynchronous Callbacks

Callbacks are useful when combined with **asynchronous** code.

```js
function logHello(callback) {
    setTimeout(() => {
        console.log('Hello');
        callback();
    }, 1000);
}

function logWorld() {
    console.log('World');
}

logHello(logWorld);

console.log('Call Timothy');
console.log('Call Sydney');
```

`setTimeout` is **asynchronous**, which means that `setTimeout` will run off the main thread, allowing the program to continue while `setTimeout` has not finished executing.
This means that we can call `Timothy` and `Sydney` while `setTimeout` is still executing.

`logHello` and `logWorld` are still **synchronous** functions, but since there is an **asynchronous** `setTimeout` being executed inside `logHello` which calls `logWorld` only after it is complete, `logHello` will return pretty much immediately while `setTimeout` is still executing.

## Conclusion

**Synchronous** operations are **blocking** and run **sequentially**.
**Asynchronous** operations are **non-blocking** and run in **parallel** so that the main thread can continue executing.
**Callbacks** are operations that run after an **initial operation**.
**Callbacks** are useful when used with **asynchronous code**.
