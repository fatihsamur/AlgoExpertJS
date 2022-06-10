// We are given an array of positive integers which represents different coins. Return the minimum value that we can not create by using these coins.
// example;
// if given [1], it returns 2 as we can not create 2 by using 1.
// if we are given arr = [1,1] ; we can create changes of 1 and 2 but we can not create 3 with these coins. So this should return 3.
// if we are given arr = [1,1,4]; again return 3, because we can create 1, 2 but can not create 3.

// solution O(Nlog(N)) Time : O(1) Space
const nonConstructibleChange = (arr) => {
  // first sort the array
  arr.sort((a, b) => a - b);

  let currSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > currSum + 1) {
      break;
    }
    currSum += arr[i];
  }
  return currSum + 1;
};

// test cases

console.log(nonConstructibleChange([1, 1])); // return 3;
console.log(nonConstructibleChange([1, 1, 4])); // return 3;
console.log(nonConstructibleChange([1, 2, 1, 3])); // return 8;
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])); // return 20;

// Hint: as we see in the for loop if the current value is greater than the sum of values before itself plus 1, we can not create a change bigger than the sum of all the value before that value + 1. If we can not encounter a value like that, we simply return the sum of all the values plus 1.
