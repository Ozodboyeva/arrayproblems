function LocalMaximum(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === 0) {
      if (arr[i] > arr[i + 1]) {
        return i;
      }
    } else if (i === arr.length - 1) {
      if (arr[i] > arr[i - 1]) {
        return i;
      }
    } else {
      if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        return i;
      }
    }
  }

  return -1;
}

const arr = [5, 3, 5, 4, 8];
console.log(LocalMaximum(arr));
