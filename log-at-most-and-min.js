
// the big O of this function is O(n)
// if n grows number of operation grows
function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(10, n); i ++) {
        console.log(i);
    }
}

// logAtLeast10(100); // 1 2 3 4 ...........100
// logAtLeast10(9); // 1 2 3 4 5 6 7 8 9 0





// operation doesnot proportion to the n 
// big on notation gonna be O(1);

function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i ++) {
        console.log(i);
    }
}

logAtMost5(100); // 1 2 3 4 5
logAtMost5(12); // 1 2 

