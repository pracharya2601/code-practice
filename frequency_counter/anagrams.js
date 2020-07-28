/*
Given two strings, write a function called validAnagram to determine 
if the second string is an anagram of the first. An anagram is a word, 
phrase, or name formed by rearranging the letters of another, such as cinema, 
formed from iceman

input: [abba], [aabb];
output: true

input: "", "";
output: true;

input: aba, abba;
output: false

constrain: 
  Time: O(n);
  space O(n);
*/

function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freqCount1 = {};

  for (var i = 0; i <= str1.length; i++) {
    let char = str1[i];
    freqCount1[char] ? (freqCount1[char] += 1) : (freqCount1[char] = 1);
  }

  console.log(freqCount1);
  for (var i = 0; i <= str2.length; i++) {
    let char2 = str2[i];
    if (!freqCount1[char2]) return false;
    else freqCount1[char2] -= 1;
  }
  return true;
}

const a = 'rat';
const b = 'cat';
console.log(anagrams(a, b));
