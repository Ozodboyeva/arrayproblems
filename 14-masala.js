function getOddMin(arr) {
  let min = Infinity;

  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

const arr = [5, 12, 3, 8, 1, 9, 2, 6];
console.log(getOddMin(arr)); // Output: 1
