// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(input) {
  var password = generatePassword(input);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function getInput() {
  var length = Number(
   prompt("how many characters would you like your password to be ?")
  );
  while (isNaN(length) || length < 8 || length > 128)
    length = Number(
      prompt(
        "Length must be 8 to 128 characters. How many characters do you want your password to have?"
      )
    );

  var lower = confirm("select your lowercase letters");
  var upper = confirm("select your uppercase letters");
  var number = confirm("select your numbers?");
  var symbol = confirm("select your symbols");

 
  var SelectFunc = {
    lower ,
    upper ,
    number ,
    symbol ,
    length,
  };
  writePassword(SelectFunc);
}
window.addEventListener("load", function () {
  getInput();
});



function generatePassword(input) {
  var password = [];
  var allowed = {};

  
  //generator functions
  function lowerCaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  function upperCaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  function randomCharacter() {
    const characters = "!@#$%^&*()_+~`|}{[]:";
    return characters[Math.floor(Math.random() * characters.length)];
  }
  if (input.lower){
    password.push(lowerCaseLetter())
  }
  if (input.upper){
    password.push(upperCaseLetter())
  }
  if (input.number){
    password.push(randomNumber())
  }
  if (input.symbol){
    password.push(randomCharacter())
  }
  password = password.join('')
  return password;
}

//  todo write the code that asks the user about the parameters for their password
//use those parameter to generate a new password
//return that password
//confirm screen

// Add event listener to generate button
