const success = false;

const onSuccess = (sArg) => {
  console.log(`Successfully gathered: ${sArg}`);
};

const onFailure = (fArg) => {
  console.log(`ERROR CAUGHT: ${fArg}`);
};

const getData = () => {
  return new Promise((resolve, reject) => {
    success ? resolve(55) : reject("404");
  });
};

const startAsync = async () => {
  try {
    const data = await getData();
    console.log(data);
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
};

console.log("Hello");
startAsync();
console.log("Call Timothy");

// Notice how onSuccess and onFailure are never called.
// Async/Await allows us to bypass using .then and .catch, and write our asynchronous code as if it were synchronous, while it still runs asynchronously
