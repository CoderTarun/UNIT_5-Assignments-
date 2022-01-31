//write a function "canSum(targetSum, numbers)" that takes in a targetSum and an array of numbers as arguments.

//The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

//You may use an element of the array as many times as needed.
//You may assume that all imput numbers are nonnegative.

let t = 7;
let num = [5, 3, 4, 7];

function canSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    let remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
    memo[targetSum] = false;
    return false;
  }
  return false;
}
console.log(canSum(300, [7, 14]));

// without memoisation
//time complexity is O(n^m)
//space comlexity is O(m)

// with memoisation
//time complexity is O(m*n)
//space comlexity is O(m)
