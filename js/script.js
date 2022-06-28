// Assignment Code
var generateBtn = document.querySelector("#generate");

//Setting our prompts as strings to be referenced later
const specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' ;
// Testing to make sure all special characters appear in selector
console.log(specialCharacters);
const numbers = '1234567890';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';

function generatePassword() {
  var passLength = prompt('Please choose a password length for your random generated password between 8 and 128 characters');
    if(passLength < 8) {
    alert('Oops! That is too small. Please pick a number at LEAST 8 or higher');
  }
  if(passLength > 128) {
    alert('Oops! That number is too large. Please pick a smaller number that is 128 characters OR less')
  }
  var passLowerCase = confirm('Press "OK" you like your random generated password to include lowercase letters?')
  var passUpperCase = confirm('Press "OK" if you like your random generated password to include uppercase letters?')
  var passNumerics = confirm('Press "OK" if you would like your random generated password to include numbers?')
  var passSpecialChars = confirm('Press "OK" if you would like your random generated password to include special characters?')


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
