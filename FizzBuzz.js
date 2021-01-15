/*Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz".*/

var value, i;
console.log(`Numbers from 1 to 100.
- All multiples of 3 have be replaced with Fizz
- all multiples of 5 have been replaced with Buzz
- And all multiples of 3 and 5 have been replaced with FIZZBUZZ`)
for (i=1;i<101;i++) {
 findValue();
 console.log(value);
   }

function findValue() {
    if ((i%3)==0 && (i%5)==0) {
       value = 'FizzBuzz';
    } else if ((i%3)==0) {
        value ='Fizz';
    } else if ((i%5)==0) {
        value = `Buzz`;
    } else {
        value = i
    }
}


//© Paul Ikonne 2020 -2021
