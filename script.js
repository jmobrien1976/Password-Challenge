// Assignment Code
var generateBtn = document.querySelector("#generate");
var securePW = "";
var characterSet =[];
var integerSet =  [1234567890];
var lowerSet = ['abcdefghijklmnopqrstuvwxyz'];
var upperSet = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var specialSet = ['!@#$%^&*()'];



function generatePassword() {      // Start of Generate Password Function

  function startOver(){             // sends the user back to the begining
    generatePassword();
  }                                 // End of Start Over fuction
 
  var lengthPW = prompt("Your Password must be between 8 and 128 Characters. How Many Characters do you want your Password?"); //Collects password length from user
        
  if (lengthPW<=7) {                                                                                                       //Confirms input is is acceptable
    alert("Your Password must be at least 8 characters.  Please try again." )
    startOver();
  }
  if (lengthPW>=129) {                                                                                                     //Confirms input is is acceptable
    alert("Your Password must have fewer than 128 characters.  Please try again." )
    startOver();
  }
  if (isNaN(lengthPW)) {                                                                                                   //Confirms input is is acceptable
    alert("Input must be a number.  Please try again." )
    startOver();
  }
 
  var upperCaseCharacters = confirm("click Ok to confirm upper case characters in your password.");                           // Collects the character types user would like in password
  var lowerCaseCharacters = confirm("click Ok to confirm lower case characters in your password.");
  var numberCharacters = confirm("click Ok to confirm numbers will be in your password,");
  var specialCharacters = confirm("click Ok to confirm special characters will be in your password,");
  
  if (upperCaseCharacters == false && lowerCaseCharacters == false && numberCharacters == false && specialCharacters == false) {                            // Confirms user has provided at least one valid input
    alert("You must select at least one character type for your Password. Click Ok to start again.");
    startOver();
  }
  
  // determines which characters to use in selection
  if (numberCharacters) {                                                                           
    characterSet = characterSet + integerSet;  
  }
  if (lowerCaseCharacters) {
    characterSet = characterSet + lowerSet;
  }
  if (upperCaseCharacters) {
    characterSet = characterSet + upperSet;
  }
  if (specialCharacters) {
    characterSet = characterSet + specialSet;
  }
  
//  this loop should run for each character in the pw
  for (i = 0; i < lengthPW; i++) {
    randomCharacter = characterSet[Math.floor(Math.random() * characterSet.length)]
    securePW = securePW + randomCharacter;
}
  return securePW;
}                                   // End of Generate Password Function

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
