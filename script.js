function generatePassword() {
  const length = document.getElementById('length').value;
  const hasLower = document.getElementById('includeLowercase').checked;
  const hasUpper = document.getElementById('includeUppercase').checked;
  const hasNumber = document.getElementById('includeNumbers').checked;
  const hasSymbol = document.getElementById('includeSymbols').checked;

  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let chars = '';
  if (hasLower) chars += lower;
  if (hasUpper) chars += upper;
  if (hasNumber) chars += numbers;
  if (hasSymbol) chars += symbols;

  if (chars === '') {
    alert("Please select at least one character type.");
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById('passwordDisplay').value = password;
}

function copyPassword() {
  const passwordField = document.getElementById('passwordDisplay');
  passwordField.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
}
