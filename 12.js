var http = require('q-io/http');


http.read('http://localhost:1337')
  .then((json) => {
    var parsed = JSON.parse(json);
    console.log(parsed);
  })
