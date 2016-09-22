var promise = new Promise((resolve, reject) => {
  // setTimeout is adding async-ity to the code
  setTimeout(reject, 300, new Error('REJECTED!'));
});

function onReject(err) {
  console.log(err.message);
}


promise.then(null, onReject);
