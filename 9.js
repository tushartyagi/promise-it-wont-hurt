/*
function parsePromised() {
  var value = process.argv[2];
  try {
    var parsed = JSON.parse(value);
    return Promise.resolve(parsed);
  } catch (err) {
    return Promise.reject(err);
  }
}

parsePromised().then(null, console.log);
 */


function parsePromised(value) {
  var promise = new Promise((resolve, reject) => {
    try {
      var parsed = JSON.parse(value);
      resolve(parsed);
    } catch (err) {
      reject(err);
    }   
  });
  return promise;
  
}

parsePromised(process.argv[2]).then(null, console.log);


