function getElementsOneTime(arr) {
  let count = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++;
    } else {
      count[arr[i]] = 1;
    }
  }

  for (let key in count) {
    if (count[key] === 1) {
      result.push(parseInt(key));
    }
  }

  return result;
}

let arr = [1, 5, 6, 1, 5, 7, 2];
console.log(getElementsOneTime(arr));
// Output: [6, 7, 2]
