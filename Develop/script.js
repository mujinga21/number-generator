// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword(){
  var length = Number (prompt("how many characters would you like your password to be ?"));
  while (isNaN(length) || length < 8 || length > 128)length = Number(prompt("Length must be 8 to 128 characters. How many characters do you want your password to have?"));
}
var lower = confirm("select your lowercase letters");
var upper = confirm("select your uppercase letters");
var number = confirm("select your numbers?");
var symbol = confirm("select your symbols");

while (!uppers && !lowers &&! number && !symbol ){
  alert("select at least one character type");
   lower = confirm("select your lowercase letters");
   upper = confirm("select your uppercase letters");
   number = confirm("select your numbers?");
   symbol = confirm("select your symbols");

}
window.addEventListener('load', function () {
  generateNewPassword();

});
var hasLower = lowercaseEl.checked;
var hasUpper = uppercaseEl.checked;
var hasNumber = numberEl.checked;
var hasSymbol = symbolEl.checked;



var SelectFunc = {
  lower: lowerCaseLetter,
  upper: upperCaseLetter,
  number: randomNumber,
  Symbol: randomCharacter
  
}


//generator functions
function lowerCaseLetter(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function upperCaseLetter(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function randomNumber (){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function randomCharacter (){
  const characters = '!@#$%^&*()_+~`|}{[]\:'
  return characters[Math.floor(Math.random()* characters.length)];
}



  //  todo write the code that asks the user about the parameters for their password
  //use those parameter to generate a new password
  //return that password
  //prompt screen


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
