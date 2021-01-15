/*In this coding exercise, I was tasked to create a function that generates an array of numbers starting with
0 and 1. Such that the next number in the array is an addition of that last two numbers.
This kind of sequence is called the Fibonacci Sequence and has numerous appliactions.
*/

//Global array declarations
var defaultArray, arrayLength, x, y;
defaultArray = [];

//Main Function
function fibonacciGenerator (n) {
if (n==1){
    defaultArray.push(0)
} else if (n==2) {
    defaultArray.push(0,1);
} else if (n>2) {
    defaultArray.push(0,1);
    for (var i=n; i>2;i--){
        arrayLength = defaultArray.length;
        x = defaultArray[arrayLength-1];
        y = defaultArray[arrayLength-2];
        defaultArray.push(x+y);
    }
}
console.log(`This is your generated Fibonacci Sequence with ${n} numbers: ${defaultArray}`);
}

//Input accepts n where n = number of items in the Fibonacci sequence
// eg. n=3 will generate [0,1,1]
fibonacciGenerator(15);

//© Paul Ikonne 2020 -2021
