// Assignment Code
var generateBtn = document.querySelector("#generate");

//Setting our variables as strings to be referenced randomly later for password generation

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' ;


//Setting placeholders to store user values entered below
var passOptions = '';

function generatePassword() {
  var passLength = prompt('Please choose a password length for your random generated password between 8 and 128 characters');
    if(passLength < 8) {
      alert('Oops! Please make sure to select a number between 8 and 128 characters :)');
      var passLength = prompt('Please choose a password length for your random generated password between 8 and 128 characters');
    } else if(passLength > 128) {
      alert('Oops! Please make sure to select a number between 8 and 128 characters :)');
      var passLength = prompt('Please choose a password length for your random generated password between 8 and 128 characters');
    }

    passLength = Number(passLength);

  var passLowerCase = confirm('Press "OK" you like your random generated password to include lowercase letters?');
  var passUpperCase = confirm('Press "OK" if you like your random generated password to include uppercase letters?');
  var passNumerics = confirm('Press "OK" if you would like your random generated password to include numbers?');
  var passSpecialChars = confirm('Press "OK" if you would like your random generated password to include special characters?');

    if(passLowerCase) {
      passOptions += lowercase;
    }
    if(passUpperCase) {
      passOptions += uppercase;
    }
    if(passNumerics) {
      passOptions += numbers;
    }
    if(passSpecialChars) {
      passOptions += specialCharacters;
    }

    if(passOptions === "") {
    alert('Oops! Error, please select at LEAST one type of additional character.');
    return 'User password is invalid.';
    }
  
 
    // console.log(passOptions);
    // console.log(passLength);
  var passCharacter = '';
  var userPassword = '';
  if(passOptions.length > 0) {
    for(i = 0; i < passLength; i++) {
    passCharacter = passOptions.charAt(Math.floor(Math.random() * (passOptions.length -1)));
    userPassword += passCharacter;

    }
    passOptions = '';
   return userPassword;
}
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);