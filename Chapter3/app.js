/* VARIABLES FOR NUMBERS */

// Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 19;

alert("I am " + age + " years old");

/*
Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”.
*/


var timeSpent = 20;

alert("You have visited this site " + timeSpent + " times");

/*
Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser:
*/

// var birthYear = 2002;
// document.write("My birth year is: " + birthYear + "<br>");
// document.write("Data type of my declared variable is Number");


/* 
A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
*/


var storeName = "Welcome to xyzClothing.com";
var visitorName = prompt('visitor Name');
var productTitle = prompt('Enter your product');
var productQuantity = prompt('Enter product Quantity');

document.write(storeName + "<br>");

document.write(visitorName + " Ordered " + productQuantity + ' ' + productTitle);