// sum up to n
// one way
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(addUpTo(5)); // return 15


/// this is how to check into the console if you wanna check the time 
// this is not the best way to check which way is faster
let t1 = performance.now();
addUpTo(10000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2-t1) / 1000} seconds.`)


// counting operation is the best way to find out 
// as 


// another way
function sumUpto(n) {
    return n * (n + 1)/ 2 ;
}
console.log(sumUpto(6)); // 21


 