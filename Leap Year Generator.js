/*Code that finds out if a year is a leap year
All Leap Years are evenly divisible by 4;
EXCPET if that year is evenly divisible by 100;
UNLESS that year is evenly divisible by 400 */

//Input accepts year from user
var x = prompt(`Input Year`, `${new Date().getFullYear()}`);
isLeap (x);

//Main Function
function isLeap(year) {
    if ((x%4)!==0) {
        console.log (`Not Leap Year.`);
    } else if ((x%100)==0 && (x%400)==0){
        console.log(`Leap Year.`);
    } else if ((x%100)==0) {
        console.log(`Not Leap Year.`);
    } else {
        console.log(`Leap year.`);
    }
}

//© Paul Ikonne 2020 -2021
