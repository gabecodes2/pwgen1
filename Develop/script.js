var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  
  // Password Length Prompt 

  var length = prompt("How long would you like your password to be? (8-128 characters)");

  while (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a number between 8-128");
    length = prompt("How long would you like your password to be? (8-128 characters)");
  }

  // Password character type confirmation

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecialChars)) {
    alert("At least one character type should be selected.");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecialChars = confirm("Include special characters?");
  }

  // Character set with user input


  var allChars = '';
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numericChars = '0123456789';
  var specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  if (includeLowercase) {
    allChars += lowercaseChars;
  }
  if (includeUppercase) {
    allChars += uppercaseChars;
  }
  if (includeNumeric) {
    allChars += numericChars;
  }
  if (includeSpecialChars) {
    allChars += specialChars;
  }

  // Final Password generator

  var password = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  // Password Alert

  alert("Generated Password: " + password);

  var passwordText = document.querySelector("#password");
  passwordText.value = password; });
