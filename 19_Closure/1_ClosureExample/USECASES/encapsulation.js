function counter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const myCounter = counter();
console.log(myCounter());  // 1
console.log(myCounter());  // 2