function changeArr(arr) {
  const n = arr.length;
  const mid = Math.floor(n / 2);

  for (let i = 0; i < mid; i++) {
    const temp = arr[i];
    arr[i] = arr[mid + i];
    arr[mid + i] = temp;
  }

  return arr;
}

const arr = [1, 2, 3, 4, 5, 6];
const changedArray = changeArr(arr);
console.log(changedArray);
