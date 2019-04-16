$(document).ready(function(){
  $("#formOne").submit(function(event) {
  event.preventDefault();

  var input = $("userNumber").val();
   var Array1 = convertUserInput(inputNumber);
   var result = "";
    for (var i = 0; i < Array1.length; i++) {
    result += Array1[i] + " ";
    }
$("#response").html(response);

// business or back end logic
// turns input into string, asks program to check for 1, but not -1, if 1 is found, statement is true, if not, false
function checkForOnes(input){
var result = input.toString().indexOf(1);
if (result === -1) {
    return false;
} else {
    return true;
}
}

// turns input into string, program checks for "0", if "0" is found, statement is true, if not false
function checkForZeroes(input){
var result = input.toString().indexOf(0);
if (result === -1) {
    return false;
} else {
    return true;
}
}

// checks if input is divisible by "3" and returns true if so, if not returns false
function divisibleByThree(input){
var result = input % 3;
if (result === 0 && input != 0) {
    return true;
} else {
    return false;
}
}

// program loops through the number, starting with zero, and adds value by 1
function convertUserInput(input){
var numberArray = [];
for (var i = 0; i <= input; i++){
 if (divisibleByThree(i) === true) {
   numberArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
 } else if (checkForOnes(i) === true) {
   numberArray.push("Boop!");
 } else if (checkForZeroes(i) === true) {
   numberArray.push("Beep!");
 } else {
   numberArray.push(i);
 }
}
return numberArray;
}

});

});
