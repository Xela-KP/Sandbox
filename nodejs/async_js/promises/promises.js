const success = true;

// This program is an example usage of Promises.
// Promises help us use callbacks and asynchronous programming.

const onSuccess = (sArg) => {
  console.log(sArg);
};

const onFailure = (fArg) => {
  console.log(fArg);
};

const promise = new Promise((resolve, reject) => {
  const sArg = "The promise was resolved";
  const fArg = "The promise was rejected";
  success ? resolve(sArg) : reject(fArg);
});

promise.then(onSuccess).catch(onFailure);
