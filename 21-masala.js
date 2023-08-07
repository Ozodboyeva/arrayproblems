function increaseArrayByK(a, k) {
  for (let i = 0; i < a.length; i++) {
    a[i] += k;
  }

  return a;
}

// Example usage
const a = [1, 2, 3, 4, 5];
const k = 10;
const increasedArray = increaseArrayByK(a, k);
console.log(increasedArray);
