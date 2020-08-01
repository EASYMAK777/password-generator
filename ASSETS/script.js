// Assignment Code
var generateBtn = document.querySelector("#generate");



//special Characters for the function Created
var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
 var upperCase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
 var numberVal =['1','2','3','4','5','6','7','8','9','0']
 var specialVal =['~','!','@','#','$','%','^','&','*','+','=']





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}






function generatePassword() {
  var paswordLength = alert("Password must be at least 8 characters long");
  
  var numbers = confirm("Do you want numbers?");
  var lowerCase = confirm("Do you want lowercase?");
  var upperCase = confirm("Do you want uppercase?");
  var symbols = confirm("Do you want symbols?");
  
  var minimumCount = 8;
  
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minmumSpecialCharacters = "";
  var minimumUpperCases = "";
  var minimumSymbols = "";
  
  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);



}


