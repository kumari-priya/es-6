 // The example below creates a promise that will call res (resolve) after a second. 
 // Then immediately, after that, it will call coolFn logging “cool” to the console.

var longFn = function() {
  return new Promise(function(res, rej) {
    setTimeout(res, 1000);
  });
};

var coolFn = function() {
  console.log('cool');
};

// logs cool after 1 second
longFn().then(coolFn);
