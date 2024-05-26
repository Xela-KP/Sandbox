const isSuccess1 = true;
const isSuccess2 = false;

// Callbacks

const callback1 = (resolve, reject) => {
  isSuccess1
    ? resolve({ message: "callback1 resolves" })
    : reject({ message: "callback1 rejects" });
};

const callback2 = (resolve, reject) => {
  isSuccess2
    ? resolve({ message: "callback2 resolves" })
    : reject({ message: "callback2 rejects" });
};

const resolve1 = (success) => {
  console.log(success.message);
  callback2(resolve2, reject2);
};

const reject1 = (failure) => {
  console.log(failure.message);
};

const resolve2 = (success) => {
  console.log(success.message);
};

const reject2 = (failure) => {
  console.log(failure.message);
};

callback1(resolve1, reject1);

// Promises

const promise1 = new Promise((resolve, reject) => {
  isSuccess1
    ? resolve({ message: "promise1 resolves" })
    : reject({ message: "promise1 rejects" });
});

const promise2 = new Promise((resolve, reject) => {
  isSuccess2
    ? resolve({ message: "promise2 resolves" })
    : reject({ message: "promise2 rejects" });
});

promise1
  .then((success) => {
    console.log(success.message);
    return promise2;
  })
  .then((success) => {
    console.log(success.message);
  })
  .catch((failure) => {
    console.log(failure.message);
  })
  .catch((failure) => {
    console.log(failure.message);
  });
