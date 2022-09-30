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

//Generate password prompts and confirms the series of password criteria.
//It generates password based on the user selected criteria and returns the result.
function generatePassword() {
  //Variable declared for password length., lowercase, uppercase, numeric and special characters.
  /*var passwordLength = prompt(
    "Password must be at least 8 characters and no more than 128 characters."
  );*/

  //If statement to evaluate the user selected password length.
  //Alert ,when selected password length is less than 8 characters and more than 128 characters.
  do {
    var passwordLength = prompt(
      "Password must be at least 8 characters and no more than 128 characters."
    );

    if (passwordLength < 8 || passwordLength > 128) {
      alert(
        "Password must be at least 8 characters and no more than 128 characters."
      );
    }
  } while (passwordLength < 8 || passwordLength > 128);

  //Variables declared for lowercase, uppercase, numeric and special characters.
  //Stores user selection to be included in the password.
  do {
    var lowerCase = confirm("Do you want lowercase characters?");
    var upperCase = confirm("Do you want uppercase characters?");
    if (lowerCase !== true && upperCase !== true) {
      alert("Password must have at least one character.");
    }
  } while (lowerCase !== true && upperCase !== true);

  var numeric = confirm("Do you want numeric characters?");
  var specialCharacters = confirm("Do you want special characters?");

  //Assign possible characters sets to the variables.
  var lowerCaseCharSet = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericSet = "0123456789";
  var specialCharSet = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  //Initialising the variables to store the characters generated in the loop.
  var upperCaseCharacter = "";
  var lowerCaseCharacter = "";
  var numericCharacter = "";
  var specialCharacter = "";
  var result = "";

  // Do...While statement
  do {
    //If Statement
    //Evaluates to true so the uppercase is generated.

    if (upperCase) {
      upperCaseCharacter = upperCaseCharSet.charAt(
        Math.floor(Math.random() * upperCaseCharSet.length)
      );
    }
    //If Statement
    //Evaluates to true so the lowercase is generated.
    if (lowerCase) {
      lowerCaseCharacter = lowerCaseCharSet.charAt(
        Math.floor(Math.random() * lowerCaseCharSet.length)
      );
    }
    //If Statement
    //Evaluates to true so the numeric is generated.
    if (numeric) {
      numericCharacter = numericSet.charAt(
        Math.floor(Math.random() * numericSet.length)
      );
    }
    //If Statement
    //Evaluates to true so the special character is generated.
    if (specialCharacters) {
      specialCharacter = specialCharSet.charAt(
        Math.floor(Math.random() * specialCharSet.length)
      );
    }
    //Concatenate the generated charasters in to a variable.
    var midResult =
      lowerCaseCharacter +
      upperCaseCharacter +
      numericCharacter +
      specialCharacter;

    //Added to the previuosly generated password
    result = result + midResult;

    //Iterate until the generated password length  is equal or exceeds the user selected password length.
  } while (result.length < passwordLength);

  //If the generated password length exceeds the user selected password length, then this will remove the extra characters.
  result = result.substring(0, passwordLength);

  console.log(result);
  //return the result to the parent function.
  return result;
}
