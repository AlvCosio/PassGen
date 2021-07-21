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
function generatePassword = ();
var length = prompt("How many characters will your password be? Enter a number between 8 and 128");
var charType = prompt("Enter a character type: special, numeric, uppercased, lowercased.");
 

// Function for getting a random element from an array
const randomElement = array[Math.floor(Math.random() * array.length)];

// Function to generate password with user input
function generatePassword() {
   //evaluate character type
   var charSet = "";
   var charTypeLower = charType.toLowerCase();
   if( charTypeLower === "lowercase" ) {
     charSet = "abcdefghijklmnopqrstuvwxyz";
   } else if( charTypeLower === "uppercase" ) {
     charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   } else if( charTypeLower === "numeric" ) {
     charSet = "0123456789";
   } else if( charTypeLower === "special" ) {
     charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
   } 
   //return value
   var retVal = "";
   for (var i = 0; i < length; i++) {
     //picks a character within charSet at index of random number
     retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
   }
   return retVal;
 }
 alert(generatePassword());

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
form.addEventListener('submit', (e) => {
  let characters = alpha;
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});