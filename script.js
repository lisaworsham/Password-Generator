// Assignment Code
var generateBtn = document.querySelector("#generate");

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 
var confirmLength = "";
var confirmSpecial;
var confirmNumeric;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword() {
  var confirmLength = (prompt("How many characters should your password contain? (Pick between 8 - 128 characters)"));

  if (confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8 - 128 characters. Try again");
      return
      //var confirmLength = (prompt("How many characters would you like your password to contain? (Pick between 8 - 128 characters)"));
  }

  alert(`Your password will have ${confirmLength} characters`);

  var confirmSpecial = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumeric = confirm("Click OK to confirm if you would like to include numeric characters");
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  if (confirmUpperCase === false && confirmLowerCase === false && confirmSpecial === false && confirmNumeric === false) {
      alert("You must choose at least one parameter");
      var confirmSpecial = confirm("Click OK to confirm if your password should contain special characters. Click CANCEL if your password should NOT contain any special characters.");
      var confirmNumeric = confirm("Click OK to confirm if your password should also contain numeric characters. Click CANCEL if your password should NOT contain any numeric characters.");
      var confirmLowerCase = confirm("Click OK to confirm if your password should also contain lowercase letters. Click CANCEL if your password should NOT contain any lowercase letters.");
      var confirmUpperCase = confirm("Click OK to confirm if your password should also contain uppercase letters. Click CANCEL if your password should NOT contain any uppercase letters.");
  }

  var passwordCharacters = [];

  passwordCharacters = confirmSpecial? passwordCharacters.concat(specialChar) : passwordCharacters.concat("");
  passwordCharacters = confirmNumeric? passwordCharacters.concat(number) : passwordCharacters.concat("");
  passwordCharacters = confirmLowerCase? passwordCharacters.concat(lowerCase) : passwordCharacters.concat("");
  passwordCharacters = confirmUpperCase? passwordCharacters.concat(upperCase) : passwordCharacters.concat("");

  //console.log(passwordCharacters);

  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
      randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(randomPassword)
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

