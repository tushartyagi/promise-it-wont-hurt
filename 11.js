function all(promise1, promise2) {
  var counter = 0;
  var values = [];
  return new Promise((resolve, reject) => {
    promise1.then((value1) => {
      values[0] = value1;
      counter += 1;
      if (counter >= 2) {
        resolve(values);
      }
    });

    promise2.then((value2) => {
      values[1] = value2;
      counter += 1;
      if (counter >= 2) {
        resolve(values);
      }
    });
  });
}

all(getPromise1(), getPromise2()).then(console.log);
