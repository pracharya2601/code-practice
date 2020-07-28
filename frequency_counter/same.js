/* 
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has 
its corresponding values squared in the second array. 
The frequency of values must be the same.

input: [1, 3, 5, 7] [1, 9, 49, 25]
output: true

input: [1, 4, 1] [1, 16]
output: false

input: [1, 4, 1] [1, 16, 1]
output: true

Constrain: 
  Time: O(n)
  Space: O(n)

*/

const same = (arr1, arr2) => {
  // different cases  check the lenth and return value
  if (arr1.length !== arr2.length) return false;

  // store to count
  const freqCount1 = {};
  const freqCount2 = {};

  // loop through array and push it on counting
  for (let val of arr1) freqCount1[val] = (freqCount1[val] || 0) + 1;
  for (let val of arr2) freqCount2[val] = (freqCount2[val] || 0) + 1;

  // looping through the stored object and check the value
  for (let key in freqCount1) {
    // check if keys ** 2 in another object and return true or false
    if (!(key ** 2 in freqCount2)) return false;
    if (freqCount1[key] !== freqCount2[key ** 2]) return false;
  }
  // return
  return true;
};
console.log(same([1, 2, 3], [1, 4, 9])); //return true
