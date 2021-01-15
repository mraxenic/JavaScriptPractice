/* This function collects inputs of a user's weight (in kg) & height (in cm or m),
checks the Body Mass Index (BMI) of the user, and gives them the result based on the range of the result.
*/

//Global variable declarations
var x, y, interpretation, weight, height;

//User Inputs
weight = prompt(`Please input your weight (kg)`, `60`)
height = prompt(`Please input your height (cm or m)`, `180`)

//Main Function
function bmiCalculator(weight, height) {
  heightConverter(height);
  //the function above checks for the unit of the inputted height and returns y
  console.log(weight,y);
    x = weight/(y**2);
    x = x.toFixed(2);
    console.log(x);
    checkRange(x);
    alert(interpretation);
}

//height unit determiner
function heightConverter(height){
//tallest human height is less than 3m so heights above 3 are in cm
if (height<3){
    y = height;
} else {
  y = height*0.01;
  y = y.toFixed(2);
}
//console.log(y);
  return y;
}

//Range interpretation
function checkRange(bmi) {
if (bmi<18.55) {
    interpretation = `Your BMI is ${bmi}, so you are underweight.`;
}
if (bmi>=18.55 && bmi<=24.95){
    interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
}
if (bmi>24.95 && bmi<=29.95) {
     interpretation = `Your BMI is ${bmi}, so you are overweight.`;
}
if (bmi>29.95 && bmi<=34.95) {
     interpretation = `Your BMI is ${bmi}, so you are obese.`;
}
if (bmi>34.95) {
     interpretation = `Your BMI is ${bmi}, so you are extremely obese.`;
}
}

//Function Invoker
bmiCalculator(weight, height)

//© Paul Ikonne 2020 -2021
