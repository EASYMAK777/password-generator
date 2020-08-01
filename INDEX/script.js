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
  var selectedCharacterTypes = []
  var paswordLength = parseInt(prompt("Password must be at least 8 characters long and less than 128"));

  if(paswordLength <8 || paswordLength >128){
    alert("Password must be at least a minumum of 8 characters and a maximum of 128 characters!")
    return ""
  }
  
  if(confirm("Do you want numbers?")){
    selectedCharacterTypes.push(numberVal)

  }


  if(confirm("Do you want lowercase?")){
    selectedCharacterTypes.push(lowerCase)

  }

  if(confirm("Do you want uppercase?")){
    selectedCharacterTypes.push(upperCase)

  }
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



