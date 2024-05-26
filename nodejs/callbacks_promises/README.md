# Callbacks and Promises

## What is a Callback?

A **callback** is a **function** that takes in **2 functions as arguments**.
The 2 arguments are **resolve** and **reject** functions respectively.

The **resolve** function executes when the callback is **successful**.
The **reject** function executes when the callback is **unsuccessful**.
Both the **resolve** and **reject** functions are user defined. (they can take in any amount of arguments)

**success** is determined by some **boolean condition**: **true = successful, false = failure**.
Let's call the success condition **isSuccess** for simplicity.

```js
const callback = (resolve, reject) => {
    isSuccess ? resolve([successArguments]?) : reject([failureArguments]);
}
```

## What is a Promise?

A **promise** is the same thing as a callback, except it's easier to read.

```js
const promise = new Promise(
    (resolve, reject) => {
        isSuccess ? resolve([successArguments]?) : reject([failureArguments]);
    }
)
```

## What is the difference?

Although the two functions above look identical apart from a promise creating a new Promise object, they are different.

The difference lies in how the callback and promise functions are called.

### Callback

```js
callback(
    ([successArguments]?) => {'callback executes this block on success (RESOLVES)'},
    ([faulureArguments]?) => {'callback executes this block on failure (REJECTS)'}
);
```

### Promise

```js
promise
    .then(([successArguments]?) => {'promise executes this block on success (RESOLVES)'})
    .catch(([faulureArguments]?) => {'promise executes this block on failure (REJECTS)'})
```

## Conclusion

**Callback** and **Promises** are the same thing, except Promises are easier to read and fix the issue of callback hell (Nested Callbacks) that become impossible to read.