/**
 * Letter Sort
 *
 * Given a string of letters, return the letters in sorted order.
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `hello --> ehllo`
 * `whiteboard --> abdehiortw`
 * `one --> eno`
 */
function letterSort(string) {
  let chars = new Array(26).fill(0);
  let sortedString = '';
  for (let c = 0; c < string.length; c++) {
    chars[string[c].charCodeAt() - 97] += 1;
  }
  for (let i = 0; i < chars.length; i++) {
    sortedString += String.fromCharCode(97 + i).repeat(chars[i]);
  }
  return sortedString;
}

//without frequency counter
function letterSort(string) {
  return string.split('').sort().join('');
}
