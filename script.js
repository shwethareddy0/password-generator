// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt(
    "Password must be at least 8 characters and no more than 128 characters."
  );

  //declare the variables for length, lowercase, uppercase, numeric and spl chars
  //confirm whether or not lowercase charachters are included.
  var lowerCase = confirm("Do you want lowercase characters?");
  //If the user doesnot want a loercase, remove the lowercase charachters set from the password.
  //
  var upperCase = confirm("Do you want uppercase characters?");
  var numeric = confirm("Do you want numeric characters?");
  var specialCharacters = confirm("Do you want special characters?");

  //Assign possible characters sets to the variables.
  var lowerCaseCharSet = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericSet = "0123456789";
  var specialCharSet = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // if user confirms the selection of the lowercase, then include lowercase characters in the password else move to the next set of characters.

  var result = "";

  do {
    if (upperCase === true) {
      upperCaseCharacter = upperCaseCharSet.charAt(
        Math.floor(Math.random() * upperCaseCharSet.length)
      );
    }
    if (lowerCase === true) {
      lowerCaseCharacter = lowerCaseCharSet.charAt(
        Math.floor(Math.random() * lowerCaseCharSet.length)
      );
    }
    if (numeric === true) {
      numericCharacter = numericSet.charAt(
        Math.floor(Math.random() * numericSet.length)
      );
    }
    if (specialCharacters === true) {
      specialCharacter = specialCharSet.charAt(
        Math.floor(Math.random() * specialCharSet.length)
      );
    }
    var midResult =
      lowerCaseCharacter +
      upperCaseCharacter +
      numericCharacter +
      specialCharacter;
    result = result + midResult;
  } while (result.length < passwordLength);
  result = result.substring(0, passwordLength);
  return result;
  console.log(result);
}

//var passwordCriteria = prompt();
