var promise = new Promise((resolve, reject) => {
  // setTimeout is adding async-ity to the code
  setTimeout(function() {
    resolve('FULFILLED!');
  }, 300);
});


promise.then((value) => {
  console.log(value);
});
