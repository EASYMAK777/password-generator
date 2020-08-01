// Assignment Code
var generateBtn = document.querySelector("#generate");



//special Characters for the function Created
  var lowerCase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var upperCase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var numberVal =['1','2','3','4','5','6','7','8','9','0']
  var specialVal =['~','!','@','#','$','%','^','&','*','+','=']





// Write password to the #password input
function writePassword() {
  console.log ()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}






function generatePassword() {
  // Empty Array
  var selectedCharacterTypes = []


  //
  var paswordLength = parseInt(prompt("Password must be at least 8 characters long and less than 128"));

  // If users password is too short or too long they will recieve an alert//
  if(paswordLength <8 || paswordLength >128){
    // alert message if too short or too long//
    alert("Password must be at least a minumum of 8 characters and a maximum of 128 characters!")
    //brings them back to begining prompt//
    return ""
  }
  //if user selects the correct amount of chararters they are given a yes or no pop up//
  if(confirm("Do you want numbers?")){
    //pushes to next confirm message//
    selectedCharacterTypes.push(numberVal)

  }

  // User picks ok or cancel, then is pushed to another confirm//
  if(confirm("Do you want lowercase?")){
    selectedCharacterTypes.push(lowerCase)

  }
  //User clicks ok or cancel, then is pushed to another confirm//

  if(confirm("Do you want uppercase?")){ 
    selectedCharacterTypes.push(upperCase)

  }
  // User clicks ok or cancel, then is pushed in to another confirm//
  if(confirm("Do you want symbols?")){
    selectedCharacterTypes.push(specialVal)

  }
  if(selectedCharacterTypes.length === 0){
    alert("You must select one character type")
    return ""
  }
  console.log(selectedCharacterTypes)
  var password=""
  for (let i = 0; i < paswordLength; i++) {
    var randomArray = Math.floor(Math.random()* selectedCharacterTypes.length)
    var randCharPosition = Math.floor(Math.random()* selectedCharacterTypes[randomArray].length)
    var randomChar = selectedCharacterTypes[randomArray][randCharPosition]
    console.log (randomArray,randCharPosition, randomChar)
    password +=randomChar
    
  }
  console.log(password)
  return password
 
  
  // Add event listener to generate button
  
  
  
}

generateBtn.addEventListener("click", writePassword);



