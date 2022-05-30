// given an array and  a target number, check if there is a pair of two number that their sum is equal to target number.

// hash table solution, Time: O(N) Space: O(N)
const isPairExist = (arr, num) => {
  const length = arr.length;
  let hashTable = {};
  for (let i = 0; i < length; i++) {
    let n = num - arr[i];
    if (hashTable[n]) {
      return [arr[i], n];
    } else {
      hashTable[arr[i]] = true;
    }
  }
  return false;
};

const res = isPairExist([3, 5, -4, 8, 11, 1, 4, 6], 10);
console.log(res);
