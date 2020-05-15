// find the length of the longest substring without repeating character.

//eg input
    // Input: "abcabcbb"
    //Output: 3 // 
    //explanation: theanswer is "abc", with the length of three




var lengthOfLongestSubString = function(s) {
    var length = s.length;
    if(length <= 1) {
        return length;
    }
    var a = 0;
    var b = 1;
    var result = 1;
    while(b < length) {
        var sub = s.slice(a, b);
        var i = sub.indexOf(s[b]);
        if(i !== -1) {
            a = a + i + 1;
        }
        b++;
        result = b - a > result ? b - a : result;
    };
    return result;
}