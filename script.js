// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Length of password
  let lengthOption = prompt("Choose length of password (min 8 characters and max 128)");
  if (lengthOption == null) {
    return;
  }
  if (lengthOption < 8 || lengthOption > 128 || isNaN(lengthOption)) {
    alert("Enter a number between 8 and 128");
    return;
  }
  
  // Lower Cased Characters Option
  let lowerCaseOption = prompt("Would you like to include lower case characters?", "Yes");
  if (lowerCaseOption == null) {
    return;
  }
  if (lowerCaseOption !== "Yes" && lowerCaseOption !== "No") {
    alert("You have to type Yes or No");
    return;
  }

  // Upper Cased Characters Option
  let upperCaseOption = prompt("Would you like to include upper case characters?", "Yes");
  if (upperCaseOption == null) {
    return;
  }
  if (upperCaseOption !== "Yes" && upperCaseOption !== "No") {
    alert("You have to type Yes or No");
    return;
  }
  // Numeric Characters Option
  let numericOption = prompt("Would you like to include numbers?", "Yes");
  if (numericOption == null) {
    return;
  }
  if (numericOption !== "Yes" && numericOption !== "No") {
    alert("You have to type Yes or No");
    return;
  }
  
  // Special Characters Option
  let specialCharactersOption = prompt("Would you like to include special characters?", "Yes"); 
  if (specialCharactersOption == null) {
    return;
  }
  if (specialCharactersOption !== "Yes" && specialCharactersOption !== "No") {
    alert("You have to type Yes or No");
    return;
  }

  console.log(lengthOption, lowerCaseOption, upperCaseOption, numericOption, specialCharactersOption);
  
  let result = {
    length: lengthOption, 
    lower: lowerCaseOption,
    upper: upperCaseOption,
    numeric: numericOption,
    special: specialCharactersOption,
  }
  console.log(result);
  return result;
}

// Function for getting a random element from an array
function getRandom(arr) {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

// Function to generate password
function generatePassword(passwordLength, mergedArray) {
  let generatedPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    generatedPassword += getRandom(mergedArray);
  }
  console.log(generatedPassword);
  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  
  // prompting
  let mergedArray = [];
  let options = getPasswordOptions();
  if (options.lower == "Yes") {
    mergedArray = lowerCasedCharacters.concat(mergedArray);
  }
  if (options.upper == "Yes") {
    mergedArray = upperCasedCharacters.concat(mergedArray);
  }
  if (options.numeric == "Yes") {
    mergedArray = numericCharacters.concat(mergedArray);
  }
  if (options.special == "Yes") {
    mergedArray = specialCharacters.concat(mergedArray);
  }

  
  
  // generation
  var password = generatePassword(options.length, mergedArray);
  
  // writing
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
