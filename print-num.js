// write a program that print the numbers from 1 to 100
//But for multiples of three print "fizz" instead of the number and for the multiple of 5 print 'Buzz'
// For number which are multiples of both three and fivw print "Fizz buzz"

(function printNum() {
    for(let i= 1; i <=100; i++) {
        if (i % 3 == 0 && i % 5) {
            console.log(`${i} FizzBuzz`)
        } else if ( i % 3 == 0) {
            console.log(`${i} Fizz`);
        } else if ( i % 5 == 0) {
            console.log(`${i} Buzz`)
        } else {
            console.log(i);
        }
    }
})();