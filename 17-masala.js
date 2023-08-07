function findLargestSum(arr) {
  let largestSum = arr[0] + arr[1];
  let largestSumIndices = [0, 1];

  for (let i = 1; i < arr.length - 1; i++) {
    let currentSum = arr[i] + arr[i + 1];

    if (currentSum > largestSum) {
      largestSum = currentSum;
      largestSumIndices = [i, i + 1];
    }
  }

  return largestSumIndices;
}

const array = [1, 2, 3, 4, 5];
const indices = findLargestSum(array);
console.log(
  `The largest sum is ${array[indices[0]]} + ${array[indices[1]]} = ${
    array[indices[0]] + array[indices[1]]
  }`
);
