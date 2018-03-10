/* Program to print largest number in console among 5 numbers using conditional statements */
var num1=-8;
var num2= 12.5;
var num3 = -6.769;
var num4= 0;
var num5= -1;
var largest;
console.log("Number 1 = " + num1);
console.log("Number 2 = " + num2);
console.log("Number 3 = " + num3);
console.log("Number 4 = " + num4);
console.log("Number 5 = " + num5);
if((num1 > num2) && (num1 > num3) && (num1 > num4) && (num1 > num5)){
	largest= num1;
	console.log("Largest number is " + largest);
}
else if((num2 > num1) && (num2 > num3) && (num2 > num4) && (num2 > num5)){
	largest= num2;
	console.log("Largest number is " + largest);
}
else if((num3 > num1) && (num3 > num2) && (num3 > num4) && (num3 > num5)){
	largest= num3;
	console.log("Largest number is " + largest);
}
else if((num4 > num1) && (num4 > num2) && (num4 > num3) && (num3 > num5)){
	largest= num4;
	console.log("Largest number is " + largest);
}
else {
	largest= num5;
	console.log("Largest number is " + largest);
}