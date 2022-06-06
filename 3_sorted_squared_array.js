//     Given an array of sorted integers, return the squares of each value of the array as a sorted array

//     Solution 1 : O(n) time / O(n) space
const sortedSquareArr = (arr) => {
  let newArr = [];
  let startIdx = 0;
  let endIdx = arr.length - 1;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let strVal = arr[startIdx];
    let endVal = arr[endIdx];
    if (Math.abs(strVal) > Math.abs(endVal)) {
      newArr[len - 1 - i] = strVal * strVal;
      startIdx++;
    } else {
      newArr[len - 1 - i] = endVal * endVal;
      endIdx--;
    }
  }

  return newArr;
};

/* Solution 2  O(nlog(n)) time / O(n) space  */
/* const sortedSquareArr = (arr) => {
  return arr
    .map((el) => {
      return Math.pow(el, 2);
    })
    .sort((a, b) => {
      return a - b;
    });
}; */

// test cases
console.log(sortedSquareArr([2, 3, 4]));
console.log(sortedSquareArr([1, 2, 2, 3, 4]));
console.log(sortedSquareArr([-9, -7, -5, -1, 0, 1, 3, 4]));
console.log(sortedSquareArr([-9, -7, -7, -5, -1, 1, 3, 4]));
