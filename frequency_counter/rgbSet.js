/**
 * RGB Set
 *
 * Given a string of characters where each character is either 'r', 'g', or 'b',
 * determine the number of complete sets of 'rgb' that can be made with the
 * characters.
 *
 * Parameters
 * Input: str {String}
 * Output: {Integer}
 *
 * Constraints
 * Time: O(N)
 * Space: O(1)
 *
 * Examples
 * `'rgbrgb' --> 2`
 * `'rbgrbrgrgbgrrggbbbbrgrgrgrg' --> 7`
 * `'bbrr' --> 0`
 */

function rgb(str) {
  if (str.length < 3) return 0;

  //need only r, b and g character
  let count = {
    r: 0,
    g: 0,
    b: 0,
  };
  let numOfPossiblePair = Infinity;
  for (let i = 0; i <= str.length; i++) {
    //we only need r b and g character
    count[str[i]] >= 0 ? count[str[i]]++ : null;
  }

  for (let char in count) {
    if (count[char] < numOfPossiblePair) {
      numOfPossiblePair = count[char];
    }
  }

  return numOfPossiblePair;
}

console.log(rgb('happbgllg'));
