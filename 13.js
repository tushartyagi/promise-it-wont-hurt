var http = require('q-io/http');

function readUserId() {
  return http.read({
    method: 'GET',
    url:'http://localhost:7000'
  });
}

function getUser(userId) {
  return http.read({
    method: 'GET',
    url:`http://localhost:7001/${userId}`
  });
}

readUserId()
  .then(getUser)
  .then((value) => {
    console.log(JSON.parse(value));
  });
