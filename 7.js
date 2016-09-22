first().then(firstValue => {
  return second(firstValue);
}).then(result => {
  return onFulfilled(result);
});

function onFulfilled(value) {
    console.log(value);
}



