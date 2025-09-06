function useCounter() {
  let count = 0;
  return function increment() {
      count += 1;
      return count;
    };
}

const increment = useCounter();
console.log(increment());  // 1
console.log(increment());  // 2