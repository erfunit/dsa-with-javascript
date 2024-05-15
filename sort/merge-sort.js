function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  while (left.length > leftIndex && right.length > rightIndex) {
    if (left[leftIndex] > right[rightIndex]) {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    } else {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// const array = [
//   3, 523, 235, 23, 1, 1, 3, 4, 23, 234, 3, 2, 1, 3, 3, 2, 4, 13, 542, 345, 235,
//   34, 325, 2, 3254, 325, 1324, 324, 3125, 3431, 25, 2, 3, 23, 3523, 42, 34, 23,
//   4423432, 4, 23, 42, 3, 23, 24, 34, 23, 23, 3, 23, 2, 323, 3, 2, 35, 2312, 5,
//   23, 4, 2, 4, 32, 43, 23, 34, 1, 3, 13,
// ];

const array = [34, 7, 23, 32, 5, 62];
console.log(mergeSort(array));
