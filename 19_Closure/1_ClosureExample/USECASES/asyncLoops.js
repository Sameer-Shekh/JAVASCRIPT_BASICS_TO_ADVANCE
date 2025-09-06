// Problem:

for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);  // Output: 4, 4, 4
  }, i * 1000);
}

// Solution:

for (var i = 1; i <= 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);  // Output: 1, 2, 3
    }, j * 1000);
  })(i);
}