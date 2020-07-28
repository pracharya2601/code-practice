/**
 * Missing Number
 *
 * Given range of 1 to N and an array of unique integers that are within that
 * range, return the missing integers not found in the array
 *
 * Parameters
 * Input: n {Integer}
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `4, [1, 4, 2] --> [3]`
 * `8, [4, 7, 1, 6] --> [2, 3, 5, 8]`
 * `6, [6, 4, 2, 1] --> [3, 5]`
 */

function missingNumber(n, arr) {
  if (n == 0) return [];
  let frequency = {};
  let missing = [];
  for (var i = 0; i < arr.length; i++) {
    frequency[arr[i]] ? (frequency[arr[i]] += 1) : (frequency[arr[i]] = 1);
  }
  for (var i = 1; i <= n; i++) {
    frequency[i] ? null : missing.push(i);
  }
  return missing;
}

console.log(missingNumber(4, [1, 2]));
