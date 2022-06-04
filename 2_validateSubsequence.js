// A subsequent is a sequence that can be derived from another sequence.
// In the parent sequence, we can find each element of the subsequence in the same order with subsequence.
// Subsequent might have all the elements of the parent or it can be just an empty sequence.
// Given two arrays if the second arr is a valid subsequent of first one.

/* Solution 1:   O(N) - time, O(1) - space */
const validateSubSequence = (arr, subArr) => {
  let mainP = 0;
  let subP = 0;

  while (mainP < arr.length && subP < subArr.length) {
    if (subArr[subP] == arr[mainP]) {
      subP++;
    }
    mainP++;
  }

  return subArr.length == subP;
};

/* Solution 2 O(N) - time, O(1) - space */

const validateSubSequence2 = (seq, subSeq) => {
  let seqP = 0;
  let subP = 0;

  for (let i = 0; i < seq.length; i++) {
    if (subSeq[subP] == seq[seqP]) {
      subP++;
    }
    if (subP == subSeq.length) {
      break;
    }
    seqP++;
  }
  return subP == subSeq.length;
};

/* Test */

console.log(validateSubSequence([1, 2, 3, 4, 5, 6, 7], [1, 4, 5, 6, 7])); // true
console.log(validateSubSequence([1, 2, 3, 4, 5, 6, 7], [1, -4, 5, 6, 7])); // false
console.log(validateSubSequence([1, 2, 3, 4, 5, 6, 7], [4, 1, 5, 6, 7])); //  false
console.log(validateSubSequence([1, 2, 3, 4, 5, 6, 7], [])); //  true
console.log(validateSubSequence([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7])); //  true
console.log(validateSubSequence([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4])); //  true

console.log(validateSubSequence2([1, 2, 3, 4, 5, 6, 7], [1, 4, 5, 6, 7])); // true
console.log(validateSubSequence2([1, 2, 3, 4, 5, 6, 7], [1, -4, 5, 6, 7])); // false
console.log(validateSubSequence2([1, 2, 3, 4, 5, 6, 7], [4, 1, 5, 6, 7])); //  false
console.log(validateSubSequence2([1, 2, 3, 4, 5, 6, 7], [])); //  true
console.log(validateSubSequence2([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7])); //  true
console.log(validateSubSequence2([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4])); //  true
