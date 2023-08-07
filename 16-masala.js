function nearestNumber(arr, R) {
  let nearestNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - R) < Math.abs(nearestNum - R)) {
      nearestNum = arr[i];
    }
  }

  return nearestNum;
}
const nums = [1, 7, 6, 8, 11];
const R = 10;
const closest = nearestNumber(nums, R);
console.log(closest); // Output: 11
