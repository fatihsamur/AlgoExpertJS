// Tournament winner
/* In this Kata we are given two arrays which contains competitions and results of competitions. In the first array we have each competition as first and second team. In the second array we have the result of that exact competitions. If the result is 0, the winner of the first competition is the second team of that match, if it is 1, the first team of that match is the winner. For example; if the entry is like (['C', 'HTML'], [0]), this means HTML win this match, or if it the entry is; (['C', 'HTML'], [1]), C is the winner. 
Finally, we should find the overall winner of the competitions by counting each of the winner of competitions. 
We will always have valid entries and the competition numbers and results array will have the same length. 
*/

// Solution : O(N) Time : O(K) Space (N:number of comps, K: number of teams)
const winner = (competitions, results) => {
  let hashTable = {};
  let len = competitions.length;
  let max = 0;
  let overallWinner = '';
  for (let i = 0; i < len; i++) {
    let win = '';
    if (results[i] == 0) {
      win = competitions[i][1];
    }
    if (results[i] == 1) {
      win = competitions[i][0];
    }
    if (!hashTable[win]) {
      hashTable[win] = 1;
    } else {
      hashTable[win]++;
    }
    let val = hashTable[win];
    if (val > max) {
      max = val;
      overallWinner = win;
    }
  }

  return overallWinner;
};

// test cases
let competitions = [
  ['HTML', 'C'],
  ['C', 'Python'],
  ['HTML', 'C'],
];

let results = [0, 0, 0];

console.log(winner(competitions, results));
