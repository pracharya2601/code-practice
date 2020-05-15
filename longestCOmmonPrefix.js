// find the longest common prefix string amongst an array of string
// if there is no common prefix return an empthy string

//example 
    //input: ["flower", "flow", "flight"]
    //output: fl

var longestCommonPrefix = function(strs) {
    if(strs === undefined || strs.length === 0) {
        return ""
    }
    A = strs.short()
    a = A[0], b = A[A.length-1]
    var i = 0
    while (i < a.length && a.charAt(i) === b.charAt(i)) i ++
    return a.subString(o,i);
}