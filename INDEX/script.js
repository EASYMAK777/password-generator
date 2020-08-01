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
    //pushes to next confirm message//
    selectedCharacterTypes.push(lowerCase)

  }
  //User clicks ok or cancel, then is pushed to another confirm//

  if(confirm("Do you want uppercase?")){
    //pushes to next confirm message// 
    selectedCharacterTypes.push(upperCase)

  }
  // User clicks ok or cancel, then is pushed in to another confirm//
  if(confirm("Do you want symbols?")){
    //pushes to next confirm message//
    selectedCharacterTypes.push(specialVal)


    //if user hits cancel on all confirms then they are given an alert letting them know they mush select at least  one character type//
  }
  if(selectedCharacterTypes.length === 0){
    //alert//
    alert("You must select one character type")
    //returns user back to the begining//
    return ""
  }

  // console recieves alerts//
  console.log(selectedCharacterTypes)
  // after user selects confirms the console goes through all criteria and conditions and generates random characters depending on user's selections either an empty value if they didnt meet criteria//
  var password=""
  // for funtion will look through the list of variables and criteria (indexes 0-5) in the arrays in lnes 6-10//
  for (let i = 0; i < paswordLength; i++) {
    //generates random character types from the arrays//
    var randomArray = Math.floor(Math.random()* selectedCharacterTypes.length)
    var randCharPosition = Math.floor(Math.random()* selectedCharacterTypes[randomArray].length)
    var randomChar = selectedCharacterTypes[randomArray][randCharPosition]
    // console logs results//
    console.log (randomArray,randCharPosition, randomChar)
    // password=random characters
    password +=randomChar
    
  }
  //console logs the pasword//
  console.log(password)
  //string of characters is presented to user//
  return password
 
  
  // Add event listener to generate button
  
  
  
}

generateBtn.addEventListener("click", writePassword);



