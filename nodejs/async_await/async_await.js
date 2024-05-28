const condition = true;

// Nested Promises

const request = (condition) => {
  console.log("making request with condition");

  return new Promise((resolve, reject) => {
    condition
      ? resolve("condition is met. resolve promise")
      : reject("condition is not met. reject promise");
  });
};

const process_request = (response) => {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve(`response: ${response}`);
  });
};

// request(condition)
//   .then((response) => {
//     console.log("response recieved");
//     return process_request(response);
//   })
//   .then((processed_response) => {
//     console.log(processed_response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async Await

const make_request = async () => {
  try {
    const response = await request(condition);
    console.log(response);
    const processed_response = await process_request(response);
    console.log(processed_response);
  } catch (err) {
    console.log(err);
  }
};

make_request();
