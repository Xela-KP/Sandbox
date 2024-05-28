# Callbacks and Promises

## What is a Callback?

A **callback** is an operation (can be a block of code or a function) that will execute AFTER some initial -typically **asynchronous**- operation has completed.
The callback is passed as an **argument** to the initial operation and serves as instructions on what to do **AFTER** the **initial operation** is completed.

In simple terms:
A **callback** is an **operation** that executes **after** an **initial operation** completes.

Do **operation1** THEN do **operation2**. ~ **operation2** is the **callback**. **operation1** is the **initial operation**.

For example:

**initial operation**: wait 100ms
**callback**: log('successfully waited 100ms')

```js
callback = () => { console.log('successfully waited 100ms') };
setTimeout(callback, 100);
```

In this example the **callback** is simply an operation that outputs "successfully waited 100ms".
The **initial operation** is an operation that waits 100ms.

The **callback** is passed as an argument to the **initial operation**.
Once the **initial operation** completes, the **callback** will be executed.

---

Another use of the **callback**:

A **callback** takes in **2 functions as arguments**.
The 2 arguments are **resolve** and **reject** functions respectively.

The **resolve** function executes when the **initial operation** is **successful**.
The **reject** function executes when the **initial operation** is **unsuccessful**.

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
);
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

**Callback** and **Promises** are the same thing, except Promises are easier to read and fix the issue of callback hell (Nested Callbacks).
