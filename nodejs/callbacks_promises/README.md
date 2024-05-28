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

A **promise** is an **object** that **helps us** use create and use **callbacks**.

A **promise** is an **object** that can either **resolve** or **reject** based on the execution of some **operation**.
The **operation** executed inside the **promise** is the same as the **initial operation** in a **callback**.

A **promise** is created using a **function** as a **constructor argument**.
The **constructor argument function** must take 2 function arguments: **resolve** and **reject**.
The **body** of the **constructor argument function** is the **operation** that executes before a **callback**. (aka the **initial operation**).
The **resolve** and **reject** functions are both **callback** functions.
The **resolve** function is a **callback** that is executed if the **initial operation** is successful.
The **reject** function is a **callback** that is executed if the **initial operation** is unsuccessful.

The actual implementation of the **resolve** function is defined inside the **.then** method of a **promise**.
The actual implementation of the **reject** function is defined inside the **.catch** method of a **promise**.

```js
const promise = new Promise(
    (resolve, reject) => {
        isSuccess ? resolve(arg1, arg2, arg3) : reject(arg1);
    }
);

promise.then((arg1, arg2, arg3) => {...}).catch((arg1) => {...})
```

## Conclusion
