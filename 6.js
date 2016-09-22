var promise =  Promise.reject(new Error('I DID NOT FIRE!'));

function onReject(err) {
  console.log(err.message);
}


promise.catch(onReject);
