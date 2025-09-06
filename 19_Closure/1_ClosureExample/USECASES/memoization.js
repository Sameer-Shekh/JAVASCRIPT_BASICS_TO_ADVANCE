function memoizedSquare() {
  const cache = {};

  return function(n) {
      if (n in cache) return cache[n];
      const result = n * n;
      cache[n] = result;
      return result;
    };
}

const square = memoizedSquare();
console.log(square(4));  // 16 (computed)
console.log(square(4));  // 16 (cached)