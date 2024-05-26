const isSuccess = false;

// Callbacks

const callback = (resolve, reject) => {
  isSuccess
    ? resolve({ message: "Callback Resolves" })
    : reject({ message: "Callback Rejects" });
};

const resolve = (success) => {
  console.log(success.message);
};

const reject = (failure) => {
  console.log(failure.message);
};

console.log(callback(resolve, reject));

// Promises

const promise = new Promise((resolve, reject) => {
  isSuccess
    ? resolve({ message: "Promise Resolves" })
    : reject({ message: "Promise Rejects" });
});

promise
  .then((success) => {
    console.log(success.message);
  })
  .catch((failure) => {
    console.log(failure.message);
  });
